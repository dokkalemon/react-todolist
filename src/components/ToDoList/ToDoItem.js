
import './ToDoItem.css';

const ToDoItem = (props) => {

    /* const [state, setState] = useState(props.doIt); */

    const month = props.date.toLocaleString('it-IT', {month: 'long'})
    const day = props.date.toLocaleString('it-IT', {day: '2-digit'})
    const year = props.date.getFullYear()

    const selectIcon = () => !props.doIt ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>
    
    return (
        <div className={`todo ${!props.doIt ? 'negative' : 'positive'}`}>
            <div className="todo-item state">
                <div className={`state-color ${!props.doIt ? 'negative' : 'positive'}`}></div>
            </div>
            <div className="todo-item info">
                <h2>{props.title}</h2>
                <h4>Data Aggiunta:  {day} {month} {year}</h4>
            </div>
            <div className="todo-item action">
                <button onClick={props.clickedState} className="btn change-state">{selectIcon()}</button>
                <button onClick={props.deleteTodo} className="btn delete"><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>
    )
}

export {ToDoItem}


