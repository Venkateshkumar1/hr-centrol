import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ComponentA from './componentA';
//import ExampleComponent from './example';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ComponentA/>
    <App/>
  </React.StrictMode>
);



