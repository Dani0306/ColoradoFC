'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components/CustomTexts';
import { fadeIn, staggerContainer } from '../utils/motion';

const FindUs = () => (
  <section id="encuentranos" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Encuéntranos!" textStyles="text-center pt-[60px]" />
      <TitleText
        title={(
          <>Descubre el lugar donde tus sueños futbolísticos cobran vida.
          </>
        )}
        textStyles="text-center pt-[20px]"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative lg:mt-[30px] flex w-full h-[550px] items-center justify-center"
      >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.45602330243!2d-75.55300410321044!3d6.334924200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f9f1051590b%3A0xafc82f9a850f5dac!2sPolideportivo%20Tulio%20Ospina.%20Central%20Park!5e0!3m2!1sen!2sco!4v1697657808750!5m2!1sen!2sco" className='w-[90%] h-[400px] md:w-[600px] md:h-[450px] lg:w-[900px] lg:h-[500px]' style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </motion.div>
    </motion.div>
  </section>
);

export default FindUs;


