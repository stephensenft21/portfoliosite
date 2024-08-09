import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
