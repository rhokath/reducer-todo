import React from "react";

const TodoForm = ({addTodo, clear, handleTask, item}) => {
const handleSubmit = e => {
    e.preventDefault();
    addTodo(item);

}

const handleClear = e => {
    e.preventDefault();
    clear()

}
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="add new todo"
            value={item}
            name="item"
            onChange={handleTask}
            />
            <button type='submit'> add Todo</button>
            <button onClick={handleClear}>clear completed</button>
        </form>

    );

};
export default TodoForm;