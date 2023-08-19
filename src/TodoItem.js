import './TodoItem.css'

function TodoItem(props){
    return (
        <li className='TodoItem'>
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>✓</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete">
                <i className="fa-solid fa-trash"></i>
            </span>
        </li>
    );
}

export {TodoItem}