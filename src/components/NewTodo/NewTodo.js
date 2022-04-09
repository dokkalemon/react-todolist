import React from 'react';
import { TodoForm } from './TodoForm'

import './NewTodo.css';

const NewTodo = (props) => {


    const watchForm = () => props.watchFormNewTodo ? <TodoForm watchFormToDoForm={props.watchFormNewTodo} inputTextHandler={props.inputTextHandlerNewTodo} inputDateHandler={props.inputDateHandlerNewTodo} saveTodo={props.saveTodoNewTodo}/> : <button type="button" onClick={props.watchFormHandler}>Inserisci Todo</button>

    return (
        <div className="new-todo-container">
            {watchForm()}
        </div>
    )
}

export { NewTodo }