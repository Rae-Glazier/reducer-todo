import React from 'react';
// import logo from './logo.svg';
import './App.css';

//components
import TodoForm from './components/ToDoForm';
import TodoList from './components/ToDoList';

//what do i need for the todo app?
//form 
//add button
//clear button
//reducer functions

const data = [
    {
      task: 'U3-S2-D1: Reducer React-Todo',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'U3-S2-D1: Lecture',
      id: 1528817084358,
      completed: false
    },
    {
      task: 'U3-S2-D1: Learn Reducer',
      id: 1528817084498,
      completed: false
    }
];

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      todos: data,
      name: ''
    }
  }

  toggleCompleted = clickedItemId => {

    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === clickedItemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  clearCompleted = () =>{
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    })
  }

  addItem = itemName => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: itemName,
          id: Date.now(),
          completed: false
        }
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <div className="header">
        <h2> Rae's List of Stuff</h2>
        <TodoForm 
          addItem={this.addItem}
          />
        </div>
        <TodoList todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
          />
      </div>
    );
  }
}
export default App;
