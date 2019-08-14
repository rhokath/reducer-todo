import React, {useReducer}from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import './App.css';
import {intitialState, todoReducer} from "./reducers/todoReducer";

function App() {
  const [state, dispatch]= useReducer(todoReducer, intitialState);
  const toggle = id => dispatch({type: "TOGGLE_COMPLETED", payload: id});
  const addTodo = item => dispatch({type: "ADD_TODO", payload: item});
  const clear = () => dispatch({type: "CLEAR_COMPLETED"});
  const handleTask = e => dispatch({type: "INPUT_ITEM", payload: e.target.value});
  

  return (
    <div className="App">
      <header className="App-header">
        hello world
      </header>
      <h2>Todo list</h2>
      <TodoList todos={state.todos} toggle={toggle}/>
      <TodoForm item={state.item} addTodo={addTodo} clear={clear} handleTask={handleTask}/>
    </div>
  );
}

export default App;
