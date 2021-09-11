const toDoBuilder = (title, description, dueDate, priority) => {
    const title = title;
    const description = description;
    const dueDate = dueDate;
    const priority = priority;
    const isDone = false;

    const changeStatus = () => {
        if(isDone == false) isDone = true;
        else isDone = false;
    }
    
};

export default toDoBuilder;