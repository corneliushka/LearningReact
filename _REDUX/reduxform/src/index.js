// default React packages :
import React from 'react';
import ReactDOM from 'react-dom';
// Redux :
import { Provider } from 'react-redux'
import store from './store'
// css & components :
import './index.css';
import DemoForm from './DemoForm';



const rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <div>
            <h2>Simple Form</h2>
            <DemoForm />
        </div>
    </Provider>,
    rootEl
);
