
import { motion } from 'framer-motion'
import { TypingText, TitleText } from "@/components/CustomTexts"
import { fadeIn, staggerContainer } from "@/utils/motion" 
import React from 'react'
import SlideNextButton from './SlideNextButton'
import SlidePrevButton from './SlidePrevButton'

const Category = ({ items, activeIndex }) => {
  return (
        <div className='w-full h-full flex items-center justify-center'>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className="relative bg-[url('/trainingbackground.png')] bg-cover lg:bg-contain bg-center w-full h-[350px] lg:w-[900px] lg:h-[500px] items-center justify-start lg:justify-center flex flex-col rounded-xl mt-[80px] pt-[50px] lg:pt-0">
              <SlidePrevButton activeIndex={activeIndex}/>
              <SlideNextButton activeIndex={activeIndex}/>
          <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]'/>
            <div className='z-[10]'>
              <TitleText textStyles={"text-center"} reduced title={<>Categoría {items.category}</>}/>    
              <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="flex justify-center flex-col mt-[30px]">
                  <TypingText textStyles={"text-center lg:text-justify"} reduced title={`| ${items.days[0]} - ${items.hours[0]} - ${items.places[0]}`} />
                  <TypingText textStyles={"text-center lg:text-justify"} reduced title={`| ${items.days[1]} - ${items.hours[1]} - ${items.places[1]}`}  />
                  {
                    items.days[2] && <TypingText textStyles={"text-center lg:text-justify"} reduced title={`| ${items.days[2]} - ${items.hours[2]} - ${items.places[2]}`}  />
                  }
              </motion.div>
            </div>
        </motion.div>
        </div>
  )
}

export default Category