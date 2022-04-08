import React from 'react';
import { TodoForm } from './TodoForm'

import './NewTodo.css';

const NewTodo = () => {
    return (
        <div className="new-todo-container">
            <h3>Inserisci un nuovo Todo</h3>
            <TodoForm />
        </div>
    )
}

export { NewTodo }