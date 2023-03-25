
import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';

function Slider(){



    const slides = [
      {url: 'Carousel1.png' },
      {url: 'Carousel2.png'},
      {url: 'Carousel3.png'},
      {url: 'Carousel4.png'},
    ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = ()=> {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length-1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = ()=>{
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (<div className='max-w-[1600px] h-[650px] w-full m-auto relative group '>
    <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className=' w-full h-full  bg-center bg-cover duration-500'>
      </div> 
      {/* left arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'><BsChevronCompactLeft onClick={prevSlide} size={30}/></div>
        {/* right arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'><BsChevronCompactRight onClick={nextSlide} size={30}/></div>
        <div className='flex top-4 justify-center py-2'>{
          slides.map((slide, slideIndex)=>(
            <div key ={slideIndex} onClick={()=> goToSlide(slideIndex)}className='text-2xl cursor-pointer'><RxDotFilled/></div>
          ))
  }</div>
      </div>
  );
}
  
  export default Slider;