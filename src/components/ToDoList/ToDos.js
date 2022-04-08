import React from 'react';

import { ToDoItem } from './ToDoItem'

import './ToDos.css';

const ToDos = (props) => {

    return (
        <div className="todo-container">
            {props.toDoList.map((todo, index) => <ToDoItem 
            key={index}
            title={todo.title}
            doIt={todo.doIt}
            date={todo.date}
            clickedState={() => {props.clickedStateToDos(todo)}}
            
            /> )}
            
             
            
        </div>
    )
}

export { ToDos };