import React from 'react';
import style from './Quote.module.css';

const Quote = () => (
  <div className={style.contentContainer}>
    <ul>
      <li>
        Mathematics is the art of giving the same name to different things. -
        <span>
          <big>
            <b>Henri Poincare</b>
          </big>
        </span>
      </li>
      <li>
        Mathematics may not teach us how to add love or subtract hate,
        but it gives us every reason to hope that every problem has a solution. -
        <span>
          <big>
            <b>William Paul Thurston</b>
          </big>
        </span>
      </li>
    </ul>
  </div>
);

export default Quote;
