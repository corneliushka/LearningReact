import React, { useState} from 'react';
import ToggleHook from './components/ToggleHook';

const App = () => {

  // const [value, setValue] = useState(initialState);
  const [name, setName] = useState('');


  return (
    <div className="main-wrapper">
      <h1>Votre e-mail de soumission : {name}</h1>
      <ToggleHook/>
      <form onSubmit={e => {
        e.preventDefault();  
        formSubmit(name, setName); 
      }}>
        <input 
          type="text" 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
        />
        <button>Soumettre l'e-mail</button>
      </form>
    </div>
  );
};

const formSubmit = (value, setValue) => {
  console.log("email sent to " + value + ' !');  
  setValue('')
};

export default App;

