// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Products from '../Pages/Products';




export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
           
          {
            path: '/',
            element: <Products />
        },
         

        ]
    }
])