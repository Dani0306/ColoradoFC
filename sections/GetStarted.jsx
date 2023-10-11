'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../utils/constants';
import { TitleText, TypingText } from '../components/CustomTexts';
import StartSteps from '../components/StartSteps';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 flex lg:items-center lg:justify-center items-end justify-end`}
      >
        <img
          src="/inscripcion.png"
          alt="get-started"
          className="w-full h-full object-cover mb-[-100px] lg:mb-auto md:mt-[190px]"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Forma Parte del Equipo" />
        <TitleText title={<>Proceso de inscripción</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
