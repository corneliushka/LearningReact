import React from 'react';
import './App.css';
import SelectComponent from './components/SelectComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React-Select Playground
      </header>
      <div className="select">
        <br></br>
        First simple Select Component : 
        <div></div>
        <SelectComponent />
      </div>
        <br></br>
      <div>
        Second Select Component : 
        <br></br>

        
      </div>
    </div>
  );
}

export default App;
