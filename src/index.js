import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import Routes from './routes';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <div className="App">
    <Navbar />
        <Routes />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

