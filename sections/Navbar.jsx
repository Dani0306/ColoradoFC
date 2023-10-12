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
          <li className={`w-full h-[50px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[0.5s]`}>
              Acerca De
          </li>
          <li className={`w-full h-[50px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[0.8s]`}>
              Explorar
          </li>
          <li className={`w-full h-[50px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.1s]`}>
              Programación
          </li>
          <li className={`w-full h-[50px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.4s]`}>
              Inscripción
          </li>
          <li className={`w-full h-[50px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.7s]`}>
              Nuestras Redes
          </li>
          <li className={`w-full h-[50px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[2s]`}>
              Horarios De Entrenamiento
          </li>
          <li className={`w-full h-[50px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[2.3s]`}>
              
          </li>
          
           {/* <li className={` ${showNavbar ? "appear" : "disappear"} transition-all duration-500 text-xl text-white my-2 lg:hidden hover:cursor-pointer`}>
                <Link href="/dashboard">
                  Dashboard
                </Link>
            </li>
              <li className={` ${showNavbar ? "appear" : "disappear"} transition-all duration-[.7s] text-xl text-white my-2 lg:hidden hover:cursor-pointer`}>
                <Link href="/bets">
                  My Bets
                </Link>
            </li>
            <li className={` ${showNavbar ? "appear" : "disappear"} transition-all duration-[.9s] text-xl text-white my-2 lg:hidden hover:cursor-pointer`}>
                New Bet
            </li>
            <li className={` ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.1s] text-xl text-white my-2 lg:hidden hover:cursor-pointer`}>
                <Link href="/statistics">
                  Statistics
                </Link>
            </li>
            <li className={` ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.3s] text-xl text-white my-2 lg:hidden hover:cursor-pointer`}>
                <Link href="/bank-management">
                  Bank management
                </Link>
            </li>
            <li className={` ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.5s] text-xl lg:duration-[.7s] text-white my-2 hover:cursor-pointer`}>
                Settings
            </li>
            <li className={` ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.7s] text-xl lg:duration-[.9s] text-white my-2 hover:cursor-pointer`}>
                Login
            </li>
            <li className={` ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.9s] text-xl lg:duration-[1.1s] text-white my-2 hover:cursor-pointer`}>
                <Link href="/help">
                  Help
                </Link>
            </li>
            <li className={` ${showNavbar ? "appear" : "disappear"} transition-all duration-[2.1s] text-xl lg:duration-[1.3s] text-white my-2 hover:cursor-pointer`}>
                <Link href="/about">
                  About Us
                </Link>
            </li>
            <li className={` ${showNavbar ? "appear" : "disappear"} transition-all duration-[2.3s] text-xl lg:duration-[1.5s] text-white my-2 hover:cursor-pointer`}>
                <Link href="/contact">
                  Contact us
                </Link>
            </li>
            <li  className={` ${showNavbar ? "appear" : "disappear"} transition-all duration-[2.5s] text-xl lg:duration-[1.7s] text-white my-2 hover:cursor-pointer`}>
                Logout
            </li> */}
          </ul>
    </motion.nav>
  )
}

export default Navbar