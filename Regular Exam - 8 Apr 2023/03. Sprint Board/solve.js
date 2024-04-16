// TODO:
function attachEvents() {
    let loadBtn = document.querySelector('#load-board-btn');
    let toDo = document.querySelector('#todo-section > .task-list');
    let inProgress = document.querySelector('#in-progress-section > .task-list');
    let codeReview = document.querySelector('#code-review-section > .task-list');
    let doneSection = document.querySelector('#done-section > .task-list');
    let tasksLits = Array.from(document.querySelectorAll('.task-list'));
    let addBtn = document.querySelector('#create-task-btn');
    let title = document.querySelector('#title');
    let description = document.querySelector('#description');
    let url = 'http://localhost:3030/jsonstore/tasks/'

    loadBtn.addEventListener('click', function(){
        displayAllTasks()
    })

    addBtn.addEventListener('click', function() {
        if (title.value === '' || description.value === ''){
            return
        }
        let information = {
            "title": title.value,
            "description": description.value,
            "status": "ToDo"
        }

        fetch(url, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(information)
        })
        .then(() => {
            displayAllTasks()
            title.value = ''
            description.value = ''
        })
    })

    function displayAllTasks() {
        tasksLits.forEach(tasks => tasks.innerHTML = '')
        fetch(url)
        .then(response => response.json())
        .then(data => {
            let details = Object.values(data);
            details.forEach(element => {
                let task = document.createElement('li');
                task.classList.add('task');
                let h3 = document.createElement('h3');
                h3.textContent = element.title;
                let p = document.createElement('p');
                p.textContent = element.description;
                let button = document.createElement('button');

                task.appendChild(h3);
                task.appendChild(p);
                if (element.status === 'ToDo'){
                    button.textContent = 'Move to In Progress';
                    task.appendChild(button);
                    toDo.appendChild(task);
                } else if (element.status === 'In Progress') {
                    button.textContent = 'Move to Code Review';
                    task.appendChild(button);
                    inProgress.appendChild(task);
                } else if (element.status === 'Code Review') {
                    button.textContent = 'Move to Done';
                    task.appendChild(button);
                    codeReview.appendChild(task);
                } else if (element.status === 'Done') {
                    button.textContent = 'Close';
                    task.appendChild(button);
                    doneSection.appendChild(task);
                }

                button.addEventListener('click', function() {
                    if (button.textContent === "Close"){
                        fetch(url + element._id, {
                            method: "DELETE",
                            headers: {"content-type": "application/json"},
                        })
                        .then(() => displayAllTasks())
                    } else {
                        let newStatus = ''
                        if (button.textContent === 'Move to In Progress') {
                            newStatus = 'In Progress';
                        } else if (button.textContent === "Move to Code Review") {
                            newStatus = 'Code Review'
                        } else {
                            newStatus = 'Done'
                        }

                        let changes = {
                            "title": element.title,
                            "description": element.description,
                            "status": newStatus
                        }

                        fetch(url + element._id, {
                            method: "PATCH",
                            headers: {"content-type": "application/json"},
                            body: JSON.stringify(changes)
                        })
                        .then(() => {
                            task.remove()
                            displayAllTasks()
                        })
                    }
                })
            })
        })
    }
}

attachEvents();