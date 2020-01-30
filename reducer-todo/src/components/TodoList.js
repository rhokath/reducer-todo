import React from "react";
import TodoItem from './TodoItem';

const TodoList = ({todos, toggle})=> {
    return(
        <div>
            {todos.map(todo => <TodoItem key={todo.id} {...todo} toggle={toggle}/>)}
        </div>
    )
}

export default TodoList;