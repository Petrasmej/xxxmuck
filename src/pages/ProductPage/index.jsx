import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://apps.kodim.cz/react-2/xxxmuck/products/${productId}`,
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product: ', error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="productDetail">
      <img src={product.photo} />
      <div className="rightBox">
        <p>{product.name}</p>
        <button className="button">Objednat</button>
      </div>
    </div>
  );
};
