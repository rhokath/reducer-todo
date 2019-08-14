import React from "react";
import './todo.css';

const TodoItem = ({id, item, toggle, completed}) => {
    return(
        <div className={"todo-task" + (completed ? " todo-completed" : "")} onClick={() => toggle(id)}>

            {item}
        </div>
    )
}

export default TodoItem;