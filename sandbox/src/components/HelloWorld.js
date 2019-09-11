import React, { Component } from 'react'

export default class HelloWorld extends Component {
// Arrow function in Class property
    state = {
        message: 'Hello World'
    }

    logMessage = () => {
        console.log(this.state.message)
    }

    render() {
        return (
            <div>
                <button 
                type="button" 
                value="Log" 
                onClick={this.logMessage}>Display log</button>
                
            </div>
        )
    }
}
