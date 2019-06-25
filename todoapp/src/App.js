import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo';


class App extends Component {
  // eslint-disable-next-line no-undef
  state = {
    todos: [
      {id: 1, content: 'learn react'},
      {id: 2, content: 'do some code'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id 
    })
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo] // ici va arriver le contenu de l'array plus haut (dans le state)
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <Todos  
          todos={this.state.todos}
          deleteTodo={this.deleteTodo} 
        />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }

}

export default App;
