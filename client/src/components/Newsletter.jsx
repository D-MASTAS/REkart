import React from 'react'

const Newsletter = () => {
  return (
  <div className="relative isolate overflow-hidden bg-sea_green-400 py-16 sm:py-24 lg:py-32 flex justify-center items-center ">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto lg:max-w-none lg:grid-cols-2">
      <div className="max-w-xl lg:max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl text-center">Subscribe to our newsletter</h2>
        <p className="mt-4 text-lg leading-8 text-gray-700 text-center"> Get timely updates from your favourite products!</p>
        <div className="mt-6 flex max-w-md gap-x-4">
          <label for="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-sea_green-100 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-mineral_green-600 sm:text-sm sm:leading-6" placeholder="Enter your email"/>
          <button type="submit" className="flex-none rounded-md bg-mineral_green-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-mineral_green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mineral_green-600">Subscribe</button>
        </div>
      </div>
      
    </div>
  </div>
  <svg className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6" viewBox="0 0 1155 678" fill="none">
    <path fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)" fill-opacity="0" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
    <defs>
      <linearGradient id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
        <stop stop-color="#9089FC" />
        <stop offset="1" stop-color="#FF80B5" />
      </linearGradient>
    </defs>
  </svg>
</div>
  )
}

export default Newsletter