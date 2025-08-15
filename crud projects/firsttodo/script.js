let taskInput = document.getElementById('task');
let addBtn = document.getElementById('addbtn');
let taskList = document.getElementById("taskList");

addBtn.addEventListener('click', () => {
    if (taskInput.value.trim() === "") return;

    const newItem = document.createElement('li');

    // Task text in its own span
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.addEventListener('click', () => {
        newItem.remove();
    });

    const completebtn = document.createElement('button');
    completebtn.textContent = 'Complete';
    completebtn.addEventListener('click', () => {
        taskText.style.textDecoration = 'line-through';
        taskText.style.opacity = '0.6';
    });

 
    newItem.appendChild(taskText);
    newItem.appendChild(deletebtn);
    newItem.appendChild(completebtn);

    taskList.appendChild(newItem);

    taskInput.value = "";
});
