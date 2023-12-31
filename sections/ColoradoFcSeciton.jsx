"use client";

import React from 'react'
import { motion } from 'framer-motion';
import styles from '@/styles';
import { staggerContainer, textVariant, slideIn } from '@/utils/motion';

const ColoradoFcSeciton = () => {
  return (
    <section id="main" className={`${styles.yPaddings} flex w-full max-w-[1600px] mx-auto h-max`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto relative flex flex-col items-center justify-start pt-[100px]`}
        >
            <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} text-center max-w-[80%] lg:max-w-[90%]`}>
                Transformando sueños en logros.
            </motion.h1>
            <motion.div variants={textVariant(1.5)} className='w-max h-max'>
                <img loading="lazy" src="logo.png" className='w-[350px] h-[400px] md:h-[500px] object-cover' alt="logo" />
            </motion.div>
        </motion.div>
    </section>
  )
}

export default ColoradoFcSeciton