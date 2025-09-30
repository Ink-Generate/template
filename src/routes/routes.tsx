// src/routes/routes.tsx

import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout'; // Import your layout
import Home from '../pages/Home';     // Import your home page

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,  // Layout is the parent element
    children: [           // Children routes are rendered inside the Layout's <Outlet />
      {
        index: true,      // This path is the default one for the parent '/'
        element: <Home />, // Renders Home component
      },
      // You can add more routes here, e.g.:
      /*
      {
        path: 'about',
        element: <About />, // assuming you have an About.tsx page
      }
      */
    ],
  },
]);