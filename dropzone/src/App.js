import React, {useCallback}   from 'react';
import './App.css';

import dropzone from './dropzone.png';
import MyDropzone from './MyDropzone';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dropzone} className="App-logo" alt="logo" />
        <MyDropzone/>
      </header>
    </div>
  );
}

export default App;
