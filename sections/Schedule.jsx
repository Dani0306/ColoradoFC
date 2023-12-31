'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../utils/constants';
import { NewFeatures, TitleText, TypingText } from '../components/CustomTexts';
import ScheduleComponent from "../components/SheduleComponent"
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const Schedule = () => (
  <section id="programacion" className={`${styles.paddings} relative z-10 overflow-hidden`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 pt-[100px]`}
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| 21 y 22 de Octubre" />
        <TitleText title={<>Programación Colorado FC</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <ScheduleComponent key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/Programacion21-22-OCT.jpg"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Schedule;
