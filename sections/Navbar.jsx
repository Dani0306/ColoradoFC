"use client";

import React, { useState } from 'react'
import styles from '@/styles';
import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion';
import { Link } from "next/link"
import { AiOutlineRocket, AiOutlineCalendar, AiOutlineInfoCircle, AiOutlineSearch, AiOutlineInstagram } from "react-icons/ai"
import { CiLocationOn } from "react-icons/ci"
import { BiFootball } from "react-icons/bi"
import { LiaAwardSolid } from "react-icons/lia"
const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <>
    {showNavbar && <div onClick={handleNavbar} className='w-full h-[100vh] fixed top-0left-0 z-[2000]'></div>}
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

          <li className={`w-full h-[55px] mt-[-50px] lg:mt-0 mb-[25px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[0.2s]`}>
            <a href="#main">
              <img src="/logo.png" className='w-[30px] h-[70px] object-cover' alt="logo" />
            </a>
          </li>
          <li className={`w-full h-[55px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[0.5s]`}>
              <AiOutlineRocket className='!w-7 !h-7 text-white mr-3'/>
              <a href="#inscripcion">!Soy Nuevo!</a>
          </li>
             
          <li className={`w-full h-[55px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[0.8s]`}>
              <AiOutlineCalendar className='!w-7 !h-7 text-white mr-3'/>
              <a href="#programacion">Programacíon</a>
          </li>
          <li className={`w-full h-[55px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.1s]`}>
              <AiOutlineInfoCircle className='!w-7 !h-7 text-white mr-3'/>
              <a href="#about">Acerca De</a>
          </li>
          <li className={`w-full h-[55px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.4s]`}>
              <AiOutlineSearch className='!w-7 !h-7 text-white mr-3'/>
              <a href="#explorar">Explorar</a>
          </li>
          <li className={`w-full h-[60px] lg:h-[55px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.7s]`}>
              <BiFootball className='!w-7 !h-7 text-white mr-3'/>   
              <a href="#entrenamientos">Horarios de Entrenamiento</a>
          </li>
          <li className={`w-full h-[55px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[2s]`}>
              <LiaAwardSolid className='!w-7 !h-7 text-white mr-3'/>  
              <a href="#reconocimientos">Jugadores Destacadas</a>
          </li>
          <li className={`w-full h-[55px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[2.3s]`}>
              <CiLocationOn className='!w-7 !h-7 text-white mr-3'/>  
              <a href="#encuentranos">Ubicación</a>
          </li>
          <li className={`w-full h-[55px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[2.6s]`}>
              <AiOutlineInstagram className='!w-7 !h-7 text-white mr-3'/> 
              <a href="#redes">Nuestras Redes</a>
          </li>
    
          </ul>
    </motion.nav>
    </>
  )
}

export default Navbar