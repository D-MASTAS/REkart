import { ethers } from 'ethers'

const Section = ({ title, items, togglePop }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-green-800">
  <h3 id={title} className="text-3xl mt-5">{title}</h3>
  <hr />

  <div className="grid gap-10 grid-cols-5 mx-auto max-w-7xl mt-20">
    {items.map((item, index) => (
      <div className="w-full max-w-xs mx-auto my-5 cursor-pointer relative transition duration-250 ease-in-out shadow-green" key={index} onClick={() => togglePop(item)}>
        <div className="w-full z-[-1]">
          <img className="w-full h-48 object-cover" src={item.image} alt="Item" />
        </div>
        <div className="w-full bg-white py-5 px-10  bottom-0 left-0">
          <h4>{item.name}</h4>
          <p>{ethers.utils.formatUnits(item.cost.toString(), 'ether')} ETH</p>
        </div>
      </div>
    ))}
  </div>
</div>

    );
}

export default Section;