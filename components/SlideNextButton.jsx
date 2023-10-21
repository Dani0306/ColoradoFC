// some-inner-component.jsx
import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { AiOutlineRight } from "react-icons/ai"

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button className='w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] bg-gray-300 flex items-center justify-center text-white absolute right-[30px] lg:right-[-100px] bottom-[20px] lg:top-[250px] z-[20] rounded-full' onClick={() => swiper.slideNext()}><AiOutlineRight className='w-[20px] lg:w-[35px] h-[20px] lg:h-[35px] text-black'/></button>
  );
}