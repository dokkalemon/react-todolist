import React from 'react';

import { ToDoItem } from './ToDoItem'

import './ToDos.css';

const ToDos = (props) => {


const watchTodo = () => {
    if (props.toDoList.length > 0) {
        return props.toDoList.map((todo, index) => <ToDoItem 
            key={index}
            title={todo.title}
            doIt={todo.doIt}
            date={todo.date}
            clickedState={() => {props.clickedStateToDos(todo)}}
            deleteTodo={() => {props.deleteTodo(index)}}
            /> )
    } else {
        return <h3>Non ci sono Todos</h3>
    }
}

    return (
        <div className="todo-container">
            {watchTodo()}
        </div>
    )
}

export { ToDos };