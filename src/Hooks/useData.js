import React, { useEffect, useState } from 'react';

const useData = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://sarkermanufacturers.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.reverse()));
  }, [products]);
  return [products, setProducts];
};

export default useData;
