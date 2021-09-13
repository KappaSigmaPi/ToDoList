
const Project = (name) => {
    let todoArray = [];

    const addTodo = (todo) => {
        todoArray.push(todo);
    };
    const removeTodo = (number) => {
        todoArray.splice(number, 1);
    };
    const getName = () => {
        return name;
    };
    const getSize = () => {
        return todoArray.length;
    }

    return {addTodo, removeTodo, getName, getSize};
};

export {Project};