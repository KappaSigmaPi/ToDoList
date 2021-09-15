const toDoBuilder = (() => {
    const addToProject = (title, description, expDate, priority, project) => {
        const usingProject = JSON.parse(localStorage.getItem(project));
        usingProject.todos.push({
            "title": title,
            "description": description,
            "expDate": expDate,
            "priority": priority, 
        });
        localStorage.setItem(project, JSON.stringify(usingProject));
    }

    const changeStatus = () => {
        if(isDone == false) isDone = true;
        else isDone = false;
    }
    
    return {changeStatus, addToProject};
})();

export { toDoBuilder };