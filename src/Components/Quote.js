import React, { useState, useEffect } from 'react';
import style from './Quote.module.css';

function Quote() {
  const category = 'life';
  const key = 'ojAjYBdnDJ1mTn7+NDqEFA==UUXIGSlNnsU0RurB';

  const [data, setData] = useState([]);
  // const [hasError, setHasError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const setHasError = null;

  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        {
          headers: {
            'x-api-key': key,
          },
        },
      );
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      setHasError(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div className={style.contentContainer}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map((item) => (
              <li key={item.quote}>{item.quote}</li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

export default Quote;
