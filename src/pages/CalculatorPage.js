import React from 'react';
import Calculator from '../Components/calculator';
import style from './CalculatorPage.module.css';

const CalculatorPage = () => (
  <div className={style.contentContainer}>
    <h2>Let&apos;s do some calculations!</h2>
    <Calculator />
  </div>
);

export default CalculatorPage;
