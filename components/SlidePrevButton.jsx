// some-inner-component.jsx
import { React } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { useSwiper } from 'swiper/react';

export default function SlidePrevButton({ activeIndex }) {
  const swiper = useSwiper();

  return (
    <>
    {
      activeIndex !== 0 && <button className='w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] bg-gray-300 flex items-center justify-center text-white absolute left-[30px] lg:left-[-100px] bottom-[25px] lg:top-[250px] z-[20] rounded-full' onClick={() => swiper.slidePrev()}><AiOutlineLeft className='w-[20px] lg:w-[35px] h-[20px] lg:h-[35px] text-black'/></button>
    }
    </>
  )
}