import './CreateTodoItem.css'

function CreateTodoItem(){
    return (
        <button
            type="button"
            onClick={(event)=>{
                console.log("Creaste elemento")
                console.log(event);
                console.log(event.target);
            }}
        >+</button>
    )
}

export {CreateTodoItem}