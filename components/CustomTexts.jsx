'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles, reduced }) => (
  <motion.p
    variants={textContainer}
    className={`font-light ${reduced ? "text-[15px] md:text-[23px] lg:text-[30px] my-[10px] lg:my-[5px]" : "text-[30px]"} text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles, reduced }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold  leading-tight ${reduced ? "text-[25px] md:text-[40px]" : "md:text-[64px] text-[40px]"} text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
