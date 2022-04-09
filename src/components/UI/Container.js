import React from 'react';
import { ToDos } from '../ToDoList/ToDos'
import { NewTodo } from '../NewTodo/NewTodo' 

import './Container.css';


const Container = (props) => {

    return (
        <div className="container">
            <NewTodo 
            watchFormNewTodo={props.watchFormContainer}
            watchFormHandler={props.watchFormHandlerApp}
            />
            <ToDos 
            toDoList={props.toDo} 
            clickedStateToDos={todo => props.clickedStateContainer(todo)} 
            deleteTodo={todo => props.cancelTodoContainer(todo)}
            />
        </div>
    )
}

export { Container };