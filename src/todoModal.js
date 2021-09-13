import {toDoBuilder} from "./todo";

const addTodoModal = () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modalContent')

    const close = document.createElement('span');
    close.classList.add('close');
    close.innerHTML = '&times;';
    close.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    modalContent.appendChild(close);
    
    const helpText = document.createElement('div');
    helpText.textContent = "Create your todo";
    helpText.classList.add('todoInput');
    helpText.classList.add('helpText');

    const titleInput = document.createElement('input');
    titleInput.classList.add('todoInput');
    titleInput.type = 'text';
    titleInput.id = 'title';
    titleInput.placeholder = 'Title';

    const descriptionInput = document.createElement('input');
    descriptionInput.classList.add('todoInput');
    descriptionInput.type = 'text';
    descriptionInput.id = 'description';
    descriptionInput.placeholder = 'Description of todo';

    const expLabel = document.createElement('div');
    expLabel.classList.add('todoInput');
    expLabel.textContent = 'Expire Date:';

    const expDateInput = document.createElement('input');
    expDateInput.classList.add('todoInput');
    expDateInput.id = 'expire';
    expDateInput.type = 'date';
    
    const labelForPriority = document.createElement('p');
    labelForPriority.textContent = 'Chose priority';

    const priorityInput1 = document.createElement('input');
    priorityInput1.classList.add('todoInput');
    priorityInput1.type = 'radio';
    priorityInput1.id = '1';
    priorityInput1.value = '1';
    priorityInput1.name = 'priority';
    priorityInput1.checked = true;

    const label1 = document.createElement('label');
    label1.textContent = "Low";

    const radio1 = document.createElement('div');
    radio1.appendChild(priorityInput1);
    radio1.appendChild(label1);

    const priorityInput2 = document.createElement('input');
    priorityInput2.classList.add('todoInput');
    priorityInput2.type = 'radio';
    priorityInput2.id = '2';
    priorityInput2.value = '2';
    priorityInput2.name = 'priority';

    const label2 = document.createElement('label');
    label2.textContent = "Medium";

    const radio2 = document.createElement('div');
    radio2.appendChild(priorityInput2);
    radio2.appendChild(label2);

    const priorityInput3 = document.createElement('input');
    priorityInput3.classList.add('todoInput');
    priorityInput3.type = 'radio';
    priorityInput3.id = '3';
    priorityInput3.value = '3';
    priorityInput3.name = 'priority';

    const label3 = document.createElement('label');
    label3.textContent = "High";

    const radio3 = document.createElement('div');
    radio3.appendChild(priorityInput3);
    radio3.appendChild(label3);
    
    const modalContentInput = document.createElement('div');
    modalContentInput.classList.add('modalInputs');

    const submitTodo = document.createElement('button')
    submitTodo.textContent = 'Create todo';
    submitTodo.classList.add('modalInputs');
    submitTodo.classList.add('confirmButton');
    submitTodo.addEventListener('click', () => {
        const formTitle = document.getElementById('title').value;
        const formDescription = document.getElementById('description').value;
        const formExpire = document.getElementById('expire').value;
        const formPriority = document.querySelector( 'input[name="priority"]:checked').id;   
        createTodo(formTitle,formDescription,formExpire,formPriority);
    });

    modal.appendChild(modalContent);
    modalContent.appendChild(helpText);
    modalContentInput.appendChild(titleInput);
    modalContentInput.appendChild(descriptionInput);
    modalContentInput.appendChild(expLabel);
    modalContentInput.appendChild(expDateInput);
    modalContentInput.appendChild(labelForPriority);
    modalContentInput.appendChild(radio1);
    modalContentInput.appendChild(radio2);
    modalContentInput.appendChild(radio3);
    modalContentInput.appendChild(submitTodo);

    modalContent.appendChild(modalContentInput);

    document.body.appendChild(modal);
};

function createTodo(title, description, expireDate, priority) {
    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
    document.getElementById('expire').value = "";
    const modal = document.querySelector('.modal');
    document.body.removeChild(modal);

    toDoBuilder(title, description, expireDate, priority);
}

export { addTodoModal };