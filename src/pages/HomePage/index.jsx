import React from 'react';
import { ListOfItems } from '../../components/listOfItems/listOfItems';
import { App } from '../../components/app/App';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
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
