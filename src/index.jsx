import React from 'react';
import {
  createBrowserRouter,
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './global.css';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { App } from './components/app/App';

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<HomePage />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
