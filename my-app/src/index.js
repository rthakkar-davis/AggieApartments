import React from 'react';
import ReactDOM from 'react-dom/client';
import ApartmentPage from './ApartmentPage.js';
import HomePage from './HomePage';

import App from './App';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,  
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/apartment/:aptName",
        element: <ApartmentPage/>,
      }
    ] 
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  // </React.StrictMode>
);
