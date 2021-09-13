import _, { add } from 'lodash';
import './style.css';
import {addTodoModal} from './todoModal';
import { ProjectContainer } from './projectContainer';
import { Project } from './project';


const addButton = document.querySelector('#addTodo');
addButton.addEventListener('click', () => {
    addTodoModal();
})

const first = Project("default");
ProjectContainer.addProject(first);
ProjectContainer.renderProjects();