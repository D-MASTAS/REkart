import React from 'react'

const Product = () => {
  return (
    <div name='skills' className='w-full h-screen bg-white text-acapulco-500'>
    {/* Container */}
    <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
       <div>
         <p className='text-4xl font-bold inline border-b-4 '>Product List</p>
       </div>
       <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mb-5'>
             <img className='w-20 mx-auto' src='Product1.png' alt='Product1 icon' />
             <p className='my-4'>Product</p>
         </div>
         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mb-5'>
             <img className='w-20 mx-auto' src='Product1.png' alt='Product2 icon' />
             <p className='my-4'>Product</p>
         </div>
         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mb-5'>
             <img className='w-20 mx-auto' src='Product1.png' alt='Product3 icon' />
             <p className='my-4'>Product</p>
         </div>
         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mb-5'>
             <img className='w-20 mx-auto' src='Product1.png' alt='Product4 icon' />
             <p className='my-4'>Product</p>
         </div>
         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mb-5'>
             <img className='w-20 mx-auto' src='Product1.png' alt='Product5 icon' />
             <p className='my-4'>Product</p>
         </div>
         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mb-5'>
             <img className='w-20 mx-auto' src='Product1.png' alt='Product6 icon' />
             <p className='my-4'>Product</p>
         </div>
         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mb-5'>
             <img className='w-20 mx-auto' src='Product1.png' alt='Product6 icon' />
             <p className='my-4'>Product</p>
         </div>
         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mb-5'>
             <img className='w-20 mx-auto' src='Product1.png' alt='Product6 icon' />
             <p className='my-4'>Product</p>
         </div>
       </div>
    </div>
 </div>
  )
}

export default Product