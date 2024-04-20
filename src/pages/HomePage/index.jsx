import React from 'react';
import { ListOfItems } from '../../components/listOfItems/listOfItems';
import './style.css';
import { Link, Outlet } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>XXX Muck</h1>
      </header>
      <main>
        <div className="title">
          <h1>Aktuální nabídka</h1>
          <p>Nejnovější prémiové produkty od předních českých designeů.</p>
          <p>Doprava zdarma až k Vám domů, na cenu nehleďte.</p>
        </div>
        <div className="offer">
          <ListOfItems />
        </div>
      </main>
    </div>
  );
};
