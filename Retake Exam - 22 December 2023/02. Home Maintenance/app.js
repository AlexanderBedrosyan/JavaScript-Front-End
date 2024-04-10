window.addEventListener("load", solve);

function solve(){
    let addTasks = document.querySelector('#add-task > form');
    let tasks = document.querySelector('#task-list');
    let doneTasks = document.querySelector('#done-list');
    
    let add = addTasks.querySelector('#add-btn');
    let [place, action, person] = addTasks.querySelectorAll('input:not(:last-of-type)');
    add.addEventListener('click', function() {
        if (place.value && action.value && person.value){
            let li = document.createElement('li');
            li.classList.add('clean-task');

            let article = document.createElement('article');

            let placeTask = document.createElement('p');
            let actioTask = document.createElement('p');
            let personTask = document.createElement('p');
            placeTask.textContent = `Place:${place.value}`;
            actioTask.textContent = `Action:${action.value}`;
            personTask.textContent = `Person:${person.value}`;
            article.appendChild(placeTask);
            article.appendChild(actioTask);
            article.appendChild(personTask);
            li.appendChild(article);

            let buttons = document.createElement('div');
            buttons.classList.add('buttons');
            let edit = document.createElement('button');
            let done = document.createElement('button');
            edit.classList.add('edit');
            edit.textContent = 'Edit'
            done.classList.add('done');
            done.textContent = 'Done';
            buttons.appendChild(edit);
            buttons.appendChild(done)
            li.appendChild(buttons);
            tasks.appendChild(li);

            Array.from(addTasks.querySelectorAll('input:not(:last-of-type)')).forEach(element => element.value = '');

            edit.addEventListener('click', function() {
                tasksEditor(li, placeTask, actioTask, personTask);
            });

            done.addEventListener('click', function() {
                doneAction(li);
            })
        }
    
    function tasksEditor(li, placeTask, actioTask, personTask){
        place.value = placeTask.textContent.replace('Place:', '');
        action.value = actioTask.textContent.replace('Action:', '');
        person.value = personTask.textContent.replace('Person:', '');
        li.remove()
    }

    function doneAction(li){
        let newLi = document.createElement('li');
        let currentArticle = li.querySelector('article');
        newLi.appendChild(currentArticle);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => newLi.remove())
        newLi.appendChild(deleteBtn);

        doneTasks.appendChild(newLi);
        li.remove();
    }
    })
}