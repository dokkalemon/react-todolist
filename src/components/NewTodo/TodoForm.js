import React from 'react';

import './TodoForm.css';

const TodoForm = () => {
    return (
        <div className="new-todo-form">
            <form>
                <label for="text">Inserisci il Testo</label>
                <input type="text" id="text" />
                <label for="data">Inserisci la data</label>
                <input type="date" id="data" />
                <button type="submit">Inserisci Todo</button>
            </form>
        </div>
    )
}

export { TodoForm }