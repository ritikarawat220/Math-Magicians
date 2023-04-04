import React from 'react';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.home}>
    <h2 className={styles.headline}>
      Welcome to our page!
    </h2>
    <p>
      A calculator is a useful tool for performing basic
      mathematical operations quickly and easily.
      It is a small, handheld device that can be found in
      nearly every household and office.
      Calculators can perform basic arithmetic functions like
      addition, subtraction, multiplication, and division,
      as well as more advanced functions
      like percentages and memory storage.
      In addition to being a tool for performing calculations,
      a calculator can simplify everyday life in many ways.
      It can be used for budgeting and managing finances,
      helping with shopping and comparing prices, and even
      for cooking and recipe conversions.
    </p>
    <p>
      With the advancement of technology, many calculators now have additional
      features that make them even more versatile and useful.
      Some calculators have large displays for easy reading,
      while others are designed to be lightweight and portable.
      There are also calculators that can perform complex scientific
      and engineering calculations.
      In short, a calculator is not just a tool but a companion
      that can make your day-to-day calculations easier and more accurate.
      It has become a necessary accessory for many people in fields
      such as everyday life, business, and education.
    </p>
  </div>
);
export default Home;
