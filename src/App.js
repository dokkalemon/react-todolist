import React, {useState} from 'react'; 

import { Container } from './components/UI/Container';

import './App.css';


function App() {

  const toDoList = [
    {
      title: 'Porta a Spasso il cane',
      doIt: false,
      date: new Date('1/01/2022')
    },
    {
      title: 'Lava la macchina',
      doIt: false,
      date: new Date('08/17/2021')
    },
    {
      title: 'Vai a fare la spesa',
      doIt: false,
      date: new Date('07/14/2021')
    },
    {
      title: 'Taglia l\'erba in Giardino',
      doIt: false,
      date: new Date('09/26/2021')
    },
  ]


  const [state, setState] = useState(toDoList);
  
  const clickedStateHandler = (todo) => {
    if (!todo.doIt) {
      todo.doIt = true;
    } else {
      todo.doIt = false
    }
    setState([...state]) 
  }

  const deleteTodoHandler = (todo) => {
    state.splice(todo, 1);
    setState([...state])
  }

  const watchForm = false

  const [hiddenForm, setHiddenForm] = useState(watchForm);

  const changeWatchForm = () => hiddenForm ? setHiddenForm(false) : setHiddenForm(true)

  return (
    <div className="App">
        <Container toDo={state} 
        clickedStateContainer={clickedStateHandler} 
        cancelTodoContainer={todo => {deleteTodoHandler(todo)}}
        watchFormContainer={hiddenForm}
        watchFormHandlerApp={changeWatchForm}
        >
          
        </Container>
    </div>
  );
}

export default App;
