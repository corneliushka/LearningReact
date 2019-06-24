import React, { Component } from 'react'
import Todos from './Todos'


class App extends Component {
  // eslint-disable-next-line no-undef
  state = {
    todos: [
      {id: 1, content: 'learn react'},
      {id: 2, content: 'do some code'}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos}/>
      </div>
    )
  }

}

export default App;
