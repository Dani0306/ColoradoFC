'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { contentAwards } from '../utils/constants';
import { TitleText, TypingText } from '../components/CustomTexts';
import AwardComponent from "../components/AwardComponent"
import { staggerContainer, fadeIn } from '../utils/motion';
import ReactPlayer from 'react-player/youtube';

const Awards = () => (
  <section id="reconocimientos" className={`${styles.paddings} relative z-10 overflow-hidden mt-[100px]`}>
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
        <TypingText title="| Premios Individuales" />
        <TitleText title={<>Nuestro Jugador Del Mes</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {contentAwards.map((description, index) => (
            <AwardComponent key={index} {...description} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <div
          src="/programacion.jpg"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
          >
            <ReactPlayer url={"https://www.youtube.com/watch?v=s-1yHi-dcSw"} width='100%' height='100%' controls={true}/>
        </div>
        
      </motion.div>
    </motion.div>
  </section>
);

export default Awards;
