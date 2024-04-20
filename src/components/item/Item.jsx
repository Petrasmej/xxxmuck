import React from 'react';

export const Item = ({ photo, name }) => {
  return (
    <div className="item">
      <img src={photo} alt={name} />
      <ul>{name}</ul>
    </div>
  );
};
