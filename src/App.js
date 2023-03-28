import './App.css';
import React from 'react';
import Calculator from './Components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Calculator />
      </div>
    );
  }
}

export default App;
