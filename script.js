const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

const wishInput = document.getElementById('new-wish');
const addWishButton = document.getElementById('add-wish');
const wishList = document.getElementById('wish-list');

const sendInvitationButton = document.getElementById('send-invitation');

function addTask() {
    const taskValue = taskInput.value.trim();
    if (taskValue) {
        const li = document.createElement('li');
        li.textContent = taskValue;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Concluir';
        completeButton.className = 'task-button';
        completeButton.onclick = () => {
            li.style.textDecoration = 'line-through';
        };

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Excluir';
        removeButton.className = 'task-button';
        removeButton.onclick = () => {
            taskList.removeChild(li);
        };

        li.appendChild(completeButton);
        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Por favor, adicione uma tarefa.');
    }
}

function addWish() {
    const wishValue = wishInput.value.trim();
    if (wishValue) {
        const li = document.createElement('li');
        li.textContent = wishValue;

        const showButton = document.createElement('button');
        showButton.textContent = 'Mostrar Item';
        showButton.className = 'wish-button';
        showButton.onclick = () => {
            alert(`Item: ${wishValue}`);
        };

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.className = 'wish-button';
        removeButton.onclick = () => {
            wishList.removeChild(li);
        };

        li.appendChild(showButton);
        li.appendChild(removeButton);
        wishList.appendChild(li);
        wishInput.value = '';
    } else {
        alert('Por favor, adicione um desejo.');
    }
}

function sendInvitation() {
    const email = prompt('Insira o e-mail do convidado:');
    if (email) {
        alert(`Convite enviado para ${email}!`);
    } else {
        alert('E-mail não informado.');
    }
}

addTaskButton.onclick = addTask;
addWishButton.onclick = addWish;
sendInvitationButton.onclick = sendInvitation;
