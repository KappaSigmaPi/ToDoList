import { Project } from "./project";
import { storageData } from "./localStorage";

const ProjectContainer = (() => {
    let projectList = [];

    const createProject = (name) => {
        return{
            projectName: name,
            todos: [],
        };
   
    };
    const removeProject = (number) => {
        projectList.splice(number, 1);
    };

    /*const renderProjects = () => {
        projectList.forEach(project => {
            const container = document.querySelector('.projectsContainer');
            const representation = document.createElement('div');
            representation.classList.add('project');

            const projectName = document.createElement('div');
            projectName.textContent = project.getName();

            const size = document.createElement('div');
            size.textContent = project.getSize();

            representation.appendChild(projectName);
            representation.appendChild(size);

            container.appendChild(representation);
        });
    };*/
    return {
        createProject,
    };

})();


export { ProjectContainer };