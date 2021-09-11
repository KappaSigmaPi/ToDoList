import _, { add } from 'lodash';
import './style.css';
import {addTodoModal} from './todoModal';


const addButton = document.querySelector('#addTodo');
addButton.addEventListener('click', () => {
    addTodoModal();
})
