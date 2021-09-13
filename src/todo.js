const toDoBuilder = (title, description, dueDate, priority) => {
    title:  title;
    description:  description;
    dueDate:  dueDate;
    priority:  priority;
    isDone:  false;

    const changeStatus = () => {
        if(isDone == false) isDone = true;
        else isDone = false;
    }
    
    return {changeStatus};
};

export { toDoBuilder };