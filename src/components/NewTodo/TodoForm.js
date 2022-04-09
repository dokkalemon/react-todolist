import React from 'react';

import './TodoForm.css';

const TodoForm = (props) => {

    return (
        <div className="new-todo-form">
            <form onSubmit={props.saveTodo}>
                <label htmlFor="text">Inserisci il Testo</label>
                <input type="text" id="text" onChange={props.inputTextHandler}/>
                <label htmlFor="data">Inserisci la data</label>
                <input type="date" id="data" onChange={props.inputDateHandler}/>
                <button type="submit">Salva</button>
            </form>
        </div>
    )
}

export { TodoForm }