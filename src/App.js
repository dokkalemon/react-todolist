import React, {useState} from 'react'; 

import { Container } from './components/UI/Container';
import toDoList from './data'

import './App.css';


function App() {

  //Change Todo's State
  const [state, setState] = useState(toDoList);
  
  const clickedStateHandler = (todo) => {
    if (!todo.doIt) {
      todo.doIt = true;
    } else {
      todo.doIt = false
    }
    setState([...state]) 
  }


  //Delete Todo
  const deleteTodoHandler = (todo) => {
    state.splice(todo, 1);
    setState([...state])
  }

  //Show Form
  const watchForm = false

  const [hiddenForm, setHiddenForm] = useState(watchForm);

  const changeWatchForm = () => {
    let value = !hiddenForm ? true : false;
    setHiddenForm(value)
  };
  

  //Save Todo
  let newTodo = {
    title: '',
    doIt: false,
    date: '',
  }

  const setTitleNewTodo = (event) => {
    newTodo = {
      ...newTodo,
      title: event.target.value
    }
  }

  const setDateNewTodo = (event) => {
      newTodo = {
        ...newTodo,
        date: new Date(event.target.value)
      }
  }

  const addTodo = (event) => {
    event.preventDefault()
    state.unshift(newTodo);
    setState([...state])
    setHiddenForm(false)
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
        <Container toDo={state} 
        clickedStateContainer={clickedStateHandler} 
        cancelTodoContainer={todo => {deleteTodoHandler(todo)}}
        watchFormContainer={hiddenForm}
        watchFormHandlerApp={changeWatchForm}
        inputTextHandlerContainer={setTitleNewTodo}
        inputDateHandlerContainer={setDateNewTodo}
        saveTodoContainer={addTodo}
        >
          
        </Container>
    </div>
  );
}

export default App;
