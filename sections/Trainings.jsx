"use client";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { motion } from "framer-motion"
import { TitleText, TypingText } from "../components/CustomTexts"
import Category from "../components/Category"
import React from 'react'
import styles from '@/styles'
import { fadeIn, staggerContainer } from '../utils/motion';
import { trainingSchedule } from "../utils/constants"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Trainings = () => {
  return (
    <section className={`${styles.paddings} w-full h-[90vh]`}>
      
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className="flex flex-col">
          <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="flex-[0.95] flex justify-center flex-col">
            <TypingText textStyles={"text-center"} title="| Cónoce Nuestros" />
            <TitleText textStyles={"text-center"} title={<>Horarios De Entrenamiento</>} />
          </motion.div>
      </motion.div>



    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
        
        {
          trainingSchedule.map((item, index) => (
            <SwiperSlide style={{ width: "100%", margin: "auto" }}>
              <Category key={index} items={item} index={index}/>
            </SwiperSlide>
          ))
        }

    
    </Swiper>
    </section>
  );
};
export default Trainings


       