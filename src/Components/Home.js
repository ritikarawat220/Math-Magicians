import React from 'react';
import style from './Home.module.css';

const Home = () => (
  <div className={style.contentContainer}>
    <h1>Welcome to our page!</h1>
    <div className={style.paragraphs}>
      <p>
        A calculator is a handy tool for quickly performing basic mathematical
        calculations. It can save time and effort compared to doing calculations
        by hand and also reduce the potential for errors. Basic calculators can
        perform basic mathematical operations such as addition, subtraction,
        multiplication and division. They are widely used in many fields such as
        everyday life, business, and education.

        A basic calculator is not just a tool for performing mathematical
        calculations, it is also a tool for simplifying everyday life.
        It can help with budgeting and managing finances, assist with
        shopping and comparing prices, and can even be used for cooking
        and recipe conversions.
      </p>
      <p>
        It is a device that can be found in nearly every household and office,
        and it has become a necessary accessory for many people. With the advancement
        of technology, many calculators now have additional features such as memory and
        percentage functions, making them even more versatile and useful.
        It&apos;s not just a tool but a companion which can make your day to day
        calculation easier and accurate.
      </p>
    </div>
  </div>
);

export default Home;
