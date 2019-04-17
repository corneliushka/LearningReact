import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return (
      <div>
        <Hello/> <World/> ! 
      </div>

  );
}

/* function SubmitButton() {
    var buttonLabel = "Submit";
    return (
        <button>{buttonLabel}</button>
    );
} */

function Hello() {
    return (
        <span>Hello</span>
    );
}

function World() {
    return (
        <span>World</span>
    )
}

ReactDOM.render(
    <HelloWorld/>,
    document.querySelector('#root')
);