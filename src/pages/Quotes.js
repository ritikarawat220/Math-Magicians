import React from 'react';
import styles from '../styles/Quotes.module.css';

const Quotes = () => (
  <div className={styles.quote}>
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

export default Quotes;
