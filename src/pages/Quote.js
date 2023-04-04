import React, { useState, useEffect } from 'react';

function Quote() {
  const category = 'life';
  const key = 'ojAjYBdnDJ1mTn7+NDqEFA==UUXIGSlNnsU0RurB';

  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      <div>{hasError && <ErrorMessage /> }</div>
      <div>
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
      :
      (quote.author ?
      (
      <div className="quotes">
        <p className="quotes__quote">{Quote.quote}</p>
        <p className="quotes__author">
          &quot;
          {Quote.author}
          &quot;
        </p>
      </div>
      ) : (
      <div className="quotes"><p>{Quote.quote}</p></div>
      )
      )
    </main>
  );

  function ErrorMessage() {
    return <p>{hasError}</p>;
  }
}

export default Quote;
