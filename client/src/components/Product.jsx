import React from 'react'

const Product = () => {
  return (
    <>
<div className="flex justify-center pt-32 bg-white">
  <div className="pb-10">
  <div>
         <p className='text-4xl font-bold text-gray-800  inline '>Try out our organic range of products!</p>
       </div>
  </div>
</div>

<div className="bg-white pt-10">
  <div className="mx-auto max-w-2xl px-4 pb-20 sm:px-6 lg:max-w-7xl lg:px-8">
  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <h2 className="sr-only">Products</h2>
</div>
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a href="#" className="group">
      <div className='shadow-md shadow-[#007AA2] hover:scale-110 duration-500'>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src="Sawdust.png" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <h3 className="mt-4 text-sm text-gray-700 text-center font-bold">Sawdust Products</h3>
    </div>
    </div>
      </a>

      <a href="#" className="group">
      <div className='shadow-md shadow-[#007AA2] hover:scale-110 duration-500'>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src="Organic.png" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <h3 className="mt-4 text-sm text-gray-700 text-center font-bold">Organic Products</h3>
        </div>
        </div>
      </a>

      <a href="#" className="group">
      <div className='shadow-md shadow-[#007AA2] hover:scale-110 duration-500'>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src="Bamboo.png" alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <h3 className="mt-4 text-sm text-gray-700 text-center font-bold">Bamboo Products</h3>
       </div>
       </div>
      </a>

      <a href="#" className="group">
      <div className='shadow-md shadow-[#007AA2] hover:scale-110 duration-500'>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src="Scrape.png" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <h3 className="mt-4 text-sm text-gray-700 text-center font-bold">Scrape Metal products</h3>
      </div>
      </div>
      </a>
     
    
     

    </div>
  </div>
</div>
</>
  )
}

export default Product