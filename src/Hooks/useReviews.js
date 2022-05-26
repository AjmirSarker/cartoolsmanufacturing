import React, { useEffect, useState } from 'react';

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://sarkermanufacturers.herokuapp.com/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data.reverse()));
  }, []);
  const ulta = [...reviews];

  return [ulta, setReviews];
};

export default useReviews;
