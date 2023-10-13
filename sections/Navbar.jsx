"use client";

import React, { useState } from 'react'
import styles from '@/styles';
import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion';
import { Link } from "next/link"

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <motion.nav variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`z-[2000] w-full mx-auto h-[10vh] text-white flex items-center justify-between bg-black fixed ${styles.xPaddings}`}>
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <img src="logo.png" alt="logo" className='w-[40px] h-[90%] object-cover' />
        <h2 className='font-extrabold text-[24px] leading-[30.24px] text-white'>COLORADO FC</h2>
        <button onClick={handleNavbar} className="flex flex-col items-center justify-center h-max w-max z-[4000]">
          <div className={`w-[28px] h-[3px] bg-white my-[3px] transition-[transform] duration-500 ${showNavbar && "openButton1"}`}></div>
          <div className={`w-[28px] h-[3px] bg-white my-[3px] transition-[transform] duration-500 ${showNavbar && "opacity-0"}`}></div>
          <div className={`w-[28px] h-[3px] bg-white my-[3px] transition-[transform] duration-500 ${showNavbar && "openButton2"}`}></div>
        </button>
        <ul className={`primary-navigation z-[2050] ${showNavbar && "abrir"}`}>

          <li className={`w-full h-[50px] mt-[-50px] lg:mt-0 mb-[25px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[0.2s]`}>
            <a href="#main">
              <img src="/logo.png" className='w-[30px] h-[70px] object-cover' alt="logo" />
            </a>
          </li>
          <li className={`w-full h-[50px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[0.5s]`}>
              <a href="#about">Acerca De</a>
          </li>
          <li className={`w-full h-[50px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[0.8s]`}>
              <a href="#explorar">Explorar</a>
          </li>
          <li className={`w-full h-[50px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.1s]`}>
              <a href="#programacion">Programación</a>
          </li>
          <li className={`w-full h-[50px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.4s]`}>
              <a href="#inscripcion">Inscripción</a>
          </li>
          <li className={`w-full h-[50px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.7s]`}>
              Horarios De Entrenamiento
          </li>
          <li className={`w-full h-[50px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[2s]`}>
              <a href="#reconocimientos">Estrellas Destacadas</a>
          </li>
          <li className={`w-full h-[50px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[2.3s]`}>
              <a href="#redes">Nuestras Redes</a>
          </li>
    
          </ul>
    </motion.nav>
  )
}

export default Navbar