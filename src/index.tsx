import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './home';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);

