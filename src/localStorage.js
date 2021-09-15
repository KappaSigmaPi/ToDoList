import { ProjectContainer } from "./projectContainer";
import { projectDisplay } from "./projectModal";


const storageData = (() => {
    const projectsNumber = () => {
        return localStorage.length;
    };
    const addProject = (name) => {
        const key = name;
        const value = ProjectContainer.createProject(name);
        localStorage.setItem(key, JSON.stringify(value));
    };
    const deleteProject = (name) => {
        localStorage.removeItem(name);
    };

    const renderProjects = () => {
        const container = document.querySelector('.projectsContainer');
        container.innerHTML = "<h3>Youre projects</h3>";
        for (let i = 0; i < localStorage.length; i++) {
            const representation = document.createElement('div');
            representation.classList.add('project');

            const projectName = document.createElement('div');
            const storageProjectName = JSON.parse(localStorage.getItem(localStorage.key(i)));
            projectName.textContent = storageProjectName.projectName;

            const size = document.createElement('div');
            size.classList.add('counter');
            size.textContent = "todos: " + storageProjectName.todos.length;

            const showButton = document.createElement('div');
            showButton.classList.add('projectShow');
            showButton.textContent = "SHOW";
            showButton.addEventListener('click', () => {
                projectDisplay.displayProject(JSON.parse(localStorage.getItem(localStorage.key(i))).projectName);
            });

            const deleteButton = document.createElement('div');
            deleteButton.classList.add('projectDelete');
            deleteButton.textContent = "DELETE";
            deleteButton.addEventListener('click', () => {
                deleteProject(storageProjectName.projectName);
                renderProjects();
            });

            representation.appendChild(projectName);
            representation.appendChild(size);
            representation.appendChild(showButton);
            representation.appendChild(deleteButton);

            container.appendChild(representation);
        }
    };

    return {
        projectsNumber,
        addProject,
        renderProjects,
    };
})();

export { storageData };