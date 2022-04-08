import React from 'react'; 

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



  return (
    <div className="App">
        <Container toDo={toDoList}>
          
        </Container>
    </div>
  );
}

export default App;
