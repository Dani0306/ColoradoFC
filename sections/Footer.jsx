'use client';

import { motion } from 'framer-motion';
import { socials } from '../utils/constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
        ¡Síguenos!
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6  rounded-[32px] gap-[12px] more-info">
          <img
            src="/info.png"
            alt="headset"
            className="w-[24px] h-[24px] object-contain rounded-full bg-white"
          />
          <span className="font-normal text-[16px] text-white">
            Más información
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            @coloradofutbolclub
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 COLORADO FC. All rights reserved.
          </p>

          <div className="flex gap-4 relative">
            {socials.map((social) => (
              <a href={social.link}>
                <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className={`w-[24px] h-[24px] object-cover cursor-pointer ${social.name === "tiktok" && "w-[35px] absolute left-[-30px] bottom-[-6px] h-[35px]"}`}
              />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
