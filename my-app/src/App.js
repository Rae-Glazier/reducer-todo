import React, {useReducer} from 'react';
// import logo from './logo.svg';
import './App.css';

//components
import TodoForm from './components/ToDoForm';
import TodoList from './components/ToDoList';
import { initialState, reducer } from './reducers/todoReducer'

//what do i need for the todo app?
//form 
//add button
//clear button
//reducer functions

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random()
    }
    dispatch({type: "ADD_TODO", payload: newTodo})
  }

  const handleComplete = (id) => {
    dispatch({type:"COMPLETED_TODO", payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: "CLEAR_COMPLETED_TODO"})
  }

  return (
    <div className="App">
      <div className='header'>
        <h1> Rae's Reducer To-Do </h1>
        <TodoForm addTodo={addTodo} />
      </div>
      
      <div className='todo-list'>
        <TodoList state={state} handleComplete={handleComplete} />
      </div>
      
      <button onClick={(e) => {
        e.preventDefault()
        clearCompleted()
      }}>Clear</button>
    </div>
  );
}

export default App;
