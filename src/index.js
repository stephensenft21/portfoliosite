import React from 'react';
import ReactDOM from 'react-dom/client'; // Use `react-dom/client` instead of `react-dom`
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create the root using React 18's `createRoot` API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance
reportWebVitals();
