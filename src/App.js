import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './Components/calculator';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Quote from './pages/Quote';

const App = () => (
  <Router>
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  </Router>
);

export default App;
