import { HomePage } from './pages/HomePage';
import './global.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage';
import { createRoot } from 'react-dom/client';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/product/:productId',
        element: <ProductPage />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
