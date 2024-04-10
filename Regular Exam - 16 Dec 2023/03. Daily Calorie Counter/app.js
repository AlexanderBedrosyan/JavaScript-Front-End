function solve(){
    const url = 'http://localhost:3030/jsonstore/tasks/';
    const loadBtn = document.querySelector('#load-meals');
    const containerInfo = document.querySelector('#list')
    const addBtn = document.querySelector('#add-meal');
    const editBtn = document.querySelector('#edit-meal');
    const food = document.querySelector('#food');
    const time = document.querySelector('#time');
    const calories = document.querySelector('#calories');

    loadBtn.addEventListener('click', function() {
        addMeals()
    })

    addBtn.addEventListener('click', function() {
        let info = {
            "food": food.value,
            "calories": calories.value,
            "time": time.value,
        }
        fetch(url, {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(info),
        })
        .then(() => {
            addMeals()
            calories.value = '';
            time.value = '';
            food.value = '';
        })
    })

    function addMeals(){
        fetch(url)
        .then(response => response.json())
        .then(data => {
            editBtn.disabled = true;
            while (containerInfo.firstChild){
                containerInfo.removeChild(containerInfo.firstChild)
            }
            let information = Object.values(data);
            information.forEach(element => {
                const div = document.createElement('div');
                div.classList.add('meal');

                const h2 = document.createElement('h2');
                h2.textContent = element.food;
                const h3time = document.createElement('h3');
                const h3calories = document.createElement('h3');
                h3time.textContent = element.time;
                h3calories.textContent = element.h3calories

                const divButtons = document.createElement('div');
                divButtons.id = 'meal-buttons';
                const changeButton = document.createElement('button');
                changeButton.textContent = 'Change'
                changeButton.classList.add('change-meal')
                changeButton.addEventListener('click', function(){
                    food.value = element.food;
                    time.value = element.time;
                    calories.value = element.calories;
                    editBtn.disabled = false;
                    addBtn.disabled = true;
                    div.remove();
                    editBtn.addEventListener('click', function() {
                        let info = {
                            "food": food.value,
                            "calories": calories.value,
                            "time": time.value
                        };
                        fetch(url + element._id, {
                            method: 'PUT',
                            headers: {'Content-type': 'application/json'},
                            body: JSON.stringify(info)
                        })
                        .then(() => {
                            addMeals();
                            addBtn.disabled = false;
                            editBtn.disabled = true;
                            food.value = '';
                            time.value = '';
                            calories.value = '';
                        })
                    })
                })
                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete-meal')
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', function() {
                    console.log(element)
                    fetch(url + element._id, {
                        method: "DELETE",
                        headers: {'Content-type': 'application/json'},
                    })
                    .then(() => addMeals());
                });

                divButtons.appendChild(changeButton)
                divButtons.appendChild(deleteButton)

                div.appendChild(h2);
                div.appendChild(h3time);
                div.appendChild(h3calories);
                div.appendChild(divButtons);

                containerInfo.appendChild(div)
            })
        });
    }
};

solve();