"use client";

import React from 'react'
import styles from '@/styles';
import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion';

const Navbar = () => {
  return (
    <motion.nav  variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`w-full mx-auto max-w-[1600px] h-[10vh] text-white flex items-center justify-between relative ${styles.xPaddings}`}>
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <img src="logo.png" alt="logo" className='w-[40px] h-[90%] object-cover' />
        <h2 className='font-extrabold text-[24px] leading-[30.24px] text-white'>COLORADO FC</h2>
        <img src="menu.svg" alt="menu-icon" className='w-[30px] h-[30px] object-contain' />
    </motion.nav>
  )
}

export default Navbar