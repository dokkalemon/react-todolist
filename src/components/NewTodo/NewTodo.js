import React from 'react';
import { TodoForm } from './TodoForm'

import './NewTodo.css';

const NewTodo = (props) => {

    const watchForm = () => props.watchFormNewTodo ? <TodoForm watchFormToDoForm={props.watchFormNewTodo}/> : <button type="button" onClick={props.watchFormHandler}>Inserisci Todo</button>

    return (
        <div className="new-todo-container">
            <h3>Inserisci un nuovo Todo</h3>
            {watchForm()}
        </div>
    )
}

export { NewTodo }