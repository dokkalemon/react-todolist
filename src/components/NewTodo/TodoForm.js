import React from 'react';

import './TodoForm.css';

const TodoForm = () => {
    return (
        <div className="new-todo-form">
            <form>
                <label htmlFor="text">Inserisci il Testo</label>
                <input type="text" id="text" />
                <label htmlFor="data">Inserisci la data</label>
                <input type="date" id="data" />
                <button type="submit">Salva</button>
            </form>
        </div>
    )
}

export { TodoForm }