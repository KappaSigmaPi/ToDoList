import _, { add } from 'lodash';
import './style.css';
import {addTodoModal, projectModal} from './todoModal';
import { ProjectContainer } from './projectContainer';
import { Project } from './project';
import { storageData } from './localStorage';


const addButton = document.querySelector('#addTodo');
addButton.addEventListener('click', () => {
    if(localStorage.length != 0) {
    addTodoModal();
    } else {
        projectModal();
    }
})

const newProjectButton = document.querySelector('#createProject');
newProjectButton.addEventListener('click', () => {
    projectModal();
});

storageData.renderProjects();