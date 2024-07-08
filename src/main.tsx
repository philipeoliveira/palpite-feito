import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './routes/Home.tsx';
import { About } from './routes/About.tsx';
import { ErrorPage } from './routes/ErrorPage.tsx';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         { path: '/', element: <Home /> },
         { path: 'about', element: <About /> },
         { path: '404', element: <ErrorPage /> },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
