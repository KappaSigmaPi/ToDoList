import { storageData } from "./localStorage";

const projectDisplay = (() => {
    const displayProject = (project) => {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modalContent')

        const close = document.createElement('span');
        close.classList.add('close');
        close.innerHTML = '&times;';
        close.addEventListener('click', () => {
            document.body.removeChild(modal);
            storageData.renderProjects();
        });
        modalContent.appendChild(close);

        const projectName = document.createElement('div');
        projectName.textContent = project;
        projectName.classList.add('todoInput');
        projectName.classList.add('helpText');

        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todoContainer');

        const parsedProject = JSON.parse(localStorage.getItem(project));
        for(let i=0; i<parsedProject.todos.length; i++) {
            const todo = document.createElement('div');
            todo.classList.add('todoDisplay');

            const title = document.createElement('div');
            title.classList.add('todoTitle');
            title.textContent = parsedProject.todos[i].title;
            todo.appendChild(title);

            const description = document.createElement('div');
            description.classList.add('todoField');
            description.textContent = 'description: ' + parsedProject.todos[i].description;
            todo.appendChild(description);

            const expireDate = document.createElement('div');
            expireDate.classList.add('todoField');
            expireDate.textContent = parsedProject.todos[i].expDate;
            todo.appendChild(expireDate);

            const priority = document.createElement('div');
            priority.classList.add('todoField');
            if(parsedProject.todos[i].priority == 1) {
                priority.textContent = 'priority: Low';
            } else 
            if(parsedProject.todos[i].priority == 2) {
                priority.textContent = "priority: Medium";
            } else {
                priority.textContent = "priority: High";
            }
            todo.appendChild(priority);

            const deleteButtonWrapper = document.createElement('div');
            deleteButtonWrapper.classList.add('deleteButtonWrapper');
            todo.appendChild(deleteButtonWrapper);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('deleteButton');
            deleteButton.textContent = 'DELETE';
            deleteButton.addEventListener('click', () => {
                parsedProject.todos.splice(i, 1);
                localStorage.setItem(project, JSON.stringify(parsedProject));
                document.body.removeChild(modal);
                displayProject(project);
            });
            deleteButtonWrapper.appendChild(deleteButton);

            todoContainer.appendChild(todo);
        }

        modalContent.appendChild(projectName);
        modalContent.appendChild(todoContainer);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    };
    return {
        displayProject,
    }
})();

export { projectDisplay };