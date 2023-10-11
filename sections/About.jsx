'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-01 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Acerca De Colorado FC" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[40px] font-normal sm:text-[32px] text-[20px] text-justify text-secondary-white"
      >
        La Corporación <span className="font-extrabold text-white">Colorado FC</span> es mucho más que un club de fútbol; 
        es un proyecto con una misión clara y una pasión inquebrantable. Iniciamos esta emocionante travesía hace 11 
        años, con el objetivo de inculcar en nuestros jugadores los conceptos fundamentales del fútbol y de la vida. 
        En el corazón de nuestra formación se encuentran los valores del juego limpio, la honestidad y la competencia, 
        alentando a nuestros jóvenes deportistas a esforzarse por ser mejores cada día. {' '}
        <span className="font-extrabold text-white">
            Ubicados en el municipio de Bello
        </span>{' '}
        somos un club de formación deportiva comprometido 
        con el crecimiento personal y deportivo de nuestros jugadores.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
