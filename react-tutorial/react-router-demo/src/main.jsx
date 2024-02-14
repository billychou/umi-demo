import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Example from './pages/Examples';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hello</div>,
  },
  {
    path: 'app',
    element: <App />,
  },
  {
    path: 'e',
    element: <Example />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
