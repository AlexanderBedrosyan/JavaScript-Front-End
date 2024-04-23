function attachEvents() {
    let url = "http://localhost:3030/jsonstore/tasks/";
    let loadBtn = document.querySelector('#load-button');
    let addBtn = document.querySelector('#add-button');
    let ulTodoList = document.querySelector('#todo-list')
    let title = document.querySelector('#title')

    addBtn.addEventListener('click', function(event){
        event.preventDefault();
        postInDb()
    })
    
    loadBtn.addEventListener('click', function(event) {
        event.preventDefault();
        addAllTasks()  
    });

    function addAllTasks(){
        ulTodoList.innerHTML = '';
        fetch(url)
        .then(resposne => resposne.json())
        .then(data => {
            let details = Object.values(data);

            details.forEach(element => {
                let li = document.createElement('li');
                let span = document.createElement('span');
                span.textContent = element.name;
                li.appendChild(span);

                let removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remove';
                let editBtn = document.createElement('button');
                editBtn.textContent = 'Edit';
                li.appendChild(removeBtn);
                li.appendChild(editBtn);
                
                ulTodoList.appendChild(li);

                removeBtn.addEventListener('click', function() {
                    fetch(url + element._id, {
                        method: "DELETE",
                        headers: {"content-type": "application\json"}
                    }).then(() => addAllTasks())
                })

                editBtn.addEventListener('click', function() {
                    let inputElement = document.createElement('input');
                    inputElement.value = element.name;
                    li.replaceChild(inputElement, span);

                    let submitBtn = document.createElement('button');
                    submitBtn.textContent = 'Submit';
                    li.replaceChild(submitBtn, editBtn);

                    submitBtn.addEventListener('click', function() {
                        fetch(url + element._id, {
                            method: "PUT",
                            headers: {"content-type": "application/json"},
                            body: JSON.stringify({"name": inputElement.value})
                        })
                        .then(() => addAllTasks())
                    })
                })
            })
        })
    }

    function postInDb() {
        let info = {"name": title.value};;
        fetch(url, {
            method: "POST",
            headers: {"content-type": "appllication\json"},
            body: JSON.stringify(info),
        })
        .then(() => addAllTasks())
        .then(() => {title.value = ''});
    }
}

attachEvents();
