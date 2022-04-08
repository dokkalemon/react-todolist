import React from 'react';
import { ToDos } from '../ToDoList/ToDos'
import { NewTodo } from '../NewTodo/NewTodo' 

import './Container.css';


const Container = (props) => {
    return (
        <div className="container">
            <NewTodo />
            <ToDos toDoList={props.toDo}/>
        </div>
    )
}

export { Container };