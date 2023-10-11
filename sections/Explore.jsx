'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreCategories } from '@/utils/constants';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components/CustomTexts';
import ExploreCard from "../components/ExploreCard"

const Explore = () => {
  const [active, setActive] = useState('category-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Vive" textStyles="text-center" />
        <TitleText
          title={<>La Experiencia<br className="md:block hidden" /> Colorado FC</>}
          textStyles="text-center"
        />
        <div className="mt-[60px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreCategories.map((category, index) => (
            <ExploreCard
              key={category.id}
              {...category}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
