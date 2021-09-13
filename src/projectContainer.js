import { Project } from "./project";

const ProjectContainer = (() => {
    let projectList = [];

    const addProject = (project) => {
        projectList.push(project);
    };
    const removeProject = (number) => {
        projectList.splice(number, 1);
    };

    const renderProjects = () => {
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
    };
    return {
        addProject,
        removeProject,
        renderProjects,
    };

})();


export { ProjectContainer };