const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}


const ID = 1
const NAME = "Bag"
const CATEGORY = "Carrying"
const IMAGE = "BAG"
const COST = tokens(1)
const CARBONFOOTPRINT = "CARBONFOOTPRINT"
const STOCK = 5

describe("Rekart", () => {
  let rekart
  let deployer, buyer

  beforeEach(async () => {
   
    [deployer, buyer] = await ethers.getSigners()

    const Rekart = await ethers.getContractFactory("Rekart")
    rekart = await Rekart.deploy()
  })

  describe("Deployment", () => {
    it("Sets the owner", async () => {
      expect(await rekart.owner()).to.equal(deployer.address)
    })
  })

  describe("Listing", () => {
    let transaction

    beforeEach(async () => {

      transaction = await rekart.connect(deployer).list(ID, NAME, CATEGORY, IMAGE, CARBONFOOTPRINT, COST, STOCK)
      await transaction.wait()
    })

    it("Returns item attributes", async () => {
      const item = await rekart.items(ID)

      expect(item.id).to.equal(ID)
      expect(item.name).to.equal(NAME)
      expect(item.category).to.equal(CATEGORY)
      expect(item.image).to.equal(IMAGE)
      expect(item.carbonfootprint).to.equal(CARBONFOOTPRINT)
      expect(item.cost).to.equal(COST)
      expect(item.stock).to.equal(STOCK)
    })

    it("Emits List event", () => {
      expect(transaction).to.emit(rekart, "List")
    })
  })

  describe("Buying", () => {
    let transaction

    beforeEach(async () => {
 
      transaction = await rekart.connect(deployer).list(ID, NAME, CATEGORY, IMAGE, CARBONFOOTPRINT, COST, STOCK)
      await transaction.wait()

 
      transaction = await rekart.connect(buyer).buy(ID, { value: COST })
      await transaction.wait()
    })


    it("Updates buyer's order count", async () => {
      const result = await rekart.orderCount(buyer.address)
      expect(result).to.equal(1)
    })

    it("Adds the order", async () => {
      const order = await rekart.orders(buyer.address, 1)

      expect(order.time).to.be.greaterThan(0)
      expect(order.item.name).to.equal(NAME)
    })

    it("Updates the contract balance", async () => {
      const result = await ethers.provider.getBalance(rekart.address)
      expect(result).to.equal(COST)
    })

    it("Emits Buy event", () => {
      expect(transaction).to.emit(rekart, "Buy")
    })
  })

  describe("Withdrawing", () => {
    let balanceBefore

    beforeEach(async () => {

      let transaction = await rekart.connect(deployer).list(ID, NAME, CATEGORY, IMAGE, CARBONFOOTPRINT, COST, STOCK)
      await transaction.wait()

 
      transaction = await rekart.connect(buyer).buy(ID, { value: COST })
      await transaction.wait()

      balanceBefore = await ethers.provider.getBalance(deployer.address)

      transaction = await rekart.connect(deployer).withdraw()
      await transaction.wait()
    })

    it('Updates the owner balance', async () => {
      const balanceAfter = await ethers.provider.getBalance(deployer.address)
      expect(balanceAfter).to.be.greaterThan(balanceBefore)
    })

    it('Updates the contract balance', async () => {
      const result = await ethers.provider.getBalance(rekart.address)
      expect(result).to.equal(0)
    })
  })
})