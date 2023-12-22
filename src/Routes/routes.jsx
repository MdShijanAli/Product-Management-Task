// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Products from '../Pages/Products';
import ProductDetails from '../Pages/ProductDetails';




export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
           
          {
            path: '/',
            element: <Products />
        },
          {
            path: '/product/:id',
              element: <ProductDetails />,
              loader: async ({ params }) => {
                const response = await fetch(`http://localhost:5000/api/products/${params.id}`);
                const data = await response.json();
                return data;
              }
        },
         

        ]
    }
])