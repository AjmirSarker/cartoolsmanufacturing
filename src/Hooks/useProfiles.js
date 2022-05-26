import React, { useEffect, useState } from 'react';

const useProfiles = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://sarkermanufacturers.herokuapp.com/profile')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products];
};

export default useProfiles;
