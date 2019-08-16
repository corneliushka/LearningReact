import React from 'react';
import { Field, reduxForm } from 'redux-form';
import showResults from 'redux-form';

let DemoForm = ( { handleSubmit } ) => 
    <form onSubmit={ handleSubmit() }>
      <div>
        <label>First Name</label>
        <Field name="firstname" component="input"/>
      </div>
      <div>
        <label>Last Name</label>
        <Field name="lastname" component="input"/>
      </div>
      <div>
        <label>E-mail</label>
        <Field name="email" component="input"/>
      </div>
      <button type="submit">Submit</button>
    </form>

DemoForm = reduxForm({
    form: 'demo',
    destroyOnUnmount: false
})(DemoForm)

export default DemoForm;



/* import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Redux Form
      </header>
    </div>
  );
}

export default App;
 */