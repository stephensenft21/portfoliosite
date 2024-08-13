import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import './App.css';
import App from './App'
ReactDOM.createPortal(
  <React.StrictMode>
    <div className="App">
        <App />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

