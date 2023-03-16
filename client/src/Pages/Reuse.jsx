import React from 'react'

const Reuse = () => {
  return (

    <div className="flex justify-center items-center bg-froly-400 min-h-screen">
    <div className="h-[650px] my-10 w-96 md:w-4/5 bg-white rounded-lg md:rounded-lg">
      <div className="flex h-full w-full">
        <div className="h-full hidden md:block relative rounded-lg overflow-hidden bg-[url('https://imgur.com/2hR32WP.jpg')] w-full">
          <img
            className="h-1/2 w-full object-cover pl-4 pt-4 pb-4 pr-4 rounded-lg"
            src="Reuse.png"
          />
          <h2 className="mb-4 text-4xl tracking-tight font-medium text-center text-cascade-800">
            RE-Use
          </h2>
          <p className="px-4 text-cascade-800 font-medium">Our Mission</p>
          <p className="mt-4 px-4 text-gray-500">
          Reduce, Reuse, Recycle: Try to reduce the amount of waste you generate by using reusable items like cloth bags, water bottles, and containers. Recycle items like paper, plastic, glass, and metal.
         
          </p>
        </div>

      
        <div className="h-full p-3 rounded-lg w-full bg-white">
            <p className="font-semibold text-xl mt-2 text-cascade-800 text-center">
            Help reduce waste and Donate goods today
            </p>
            <div className="mt-4 w-full flex flex-col">
              <div className="flex gap-2 w-full">
              <input class="appearance-none" type="radio" name="select_option" id="select_option1"/> 
                        <label class="w-full" for="select_option1">
                            <div class="click_option h-16 gap-3 cursor-pointer transition-all w-full px-2 border-2 flex justify-center items-center">
                              
                                <p class="text-sm text-blue-800 font-semibold">Clothes</p>
                            </div>
                        </label>
                        
                        <input class="appearance-none" type="radio" name="select_option" id="select_option2"/> 
                        <label class="w-full" for="select_option2">
                            <div class="click_option h-16 gap-3 cursor-pointer transition-all w-full px-2 border-2 flex justify-center items-center">
                               
                                <p class="text-sm text-blue-800 font-semibold">Books</p>
                            </div>
                        </label>
                    </div>
                    
                    <div class="flex gap-2 w-full mt-4">
                        <input class="appearance-none" type="radio" name="select_option" id="select_option3"/> 
                        <label class="w-full" for="select_option3">
                            <div class="click_option h-16 gap-3 cursor-pointer transition-all w-full px-2 border-2 flex justify-center items-center">
            
                                <p class="text-sm text-blue-800 font-semibold">Accesories</p>
                            </div>
                        </label>
                        
                        <input class="appearance-none" type="radio" name="select_option" id="select_option4"/> 
                        <label class="w-full" for="select_option4">
                            <div class="click_option h-16 gap-3 cursor-pointer transition-all w-full px-2 border-2 flex justify-center items-center">
                           
                                <p class="text-sm text-blue-800 font-semibold">Others</p>
                            </div>
                        </label>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-5">
              {' '}
              We are incredibly grateful for your generous donations. Your contribution will not only help reduce waste, but also make a positive impact in the lives of those who receive them. Thank you for your kindness and support!
            </p>

            <p className="mt-3 font-semibold text-cascade-800">
             Add Address
            </p>
          
       
              <input
                type="number"
                className="w-full py-2 border border-black rounded mt-3 px-3"
                placeholder="Enter your address here"
                
              />
           
            <hr className="my-4" />
          
            <div className="my-4 flex justify-between">
              <button  className="buttons bg-acapulco-400 rounded-2xl p-2">
                Donate Now
              </button>
            </div>
         
            

           
          
     
          
         
          </div>
        
      </div>
    </div>
  </div>
  )
}

export default Reuse