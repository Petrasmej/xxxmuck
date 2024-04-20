import React from 'react';
import { useState, useEffect } from 'react';
import { Item } from '../item/Item';
import { Link } from 'react-router-dom';
import './style.css';

export const ListOfItems = () => {
  const [items, setItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          'https://apps.kodim.cz/react-2/xxxmuck/products',
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items: ', error);
      }
    };
    fetchItems();
  }, []);

  //if (loading) return <div>Loading...</div>;

  return (
    <div className="list">
      {items.map((i) => {
        return (
          <div key={i.id}>
            {
              <Link to={`/product/${i.id}`}>
                <Item photo={i.image} name={i.name} />
              </Link>
            }
          </div>
        );
      })}
    </div>
  );
};
