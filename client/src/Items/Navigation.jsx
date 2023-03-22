import { ethers } from 'ethers'

const Navigation = ({account, SetAccount}) => {
    const connectHandler = async () => {
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
    const account = ethers.utils.getAddress(accounts[0]);
    SetAccount(account);
}
  return (
    <nav className='flex flex-row justify-center bg-bunker mt-6'>
  {account ? (
    <button
      type="button"
      className='w-40 h-10 mx-10 bg-green-300 text-black rounded-md font-lalezar font-medium cursor-pointer transition duration-250 ease-in-out'
    >
      {account.slice(0, 6) + '...' + account.slice(38, 42)}
    </button>
  ) : (
    <button
      type="button"
      className='w-40 h-10 mx-auto bg-green-300 text-black rounded-md font-lalezar font-medium cursor-pointer transition duration-250 ease-in-out'
      onClick={connectHandler}
    >
      Connect
    </button>
  )}
  <ul className='bg-ebony-clay grid-cols-3 col-span-3 p-4 flex justify-center items-center list-none'>
    <li>
      <a href="#Clothing" className="text-green-500 font-bold hover:underline p-3">Clothing</a>
    </li>
    <li>
      <a href="#Electronics" className="text-green-500 font-bold hover:underline p-3">Electronics</a>
    </li>
    <li>
      <a href="#Toys" className="text-green-500 font-bold hover:underline p-3">Toys</a>
    </li>
  </ul>
</nav>
  )
}

export default Navigation