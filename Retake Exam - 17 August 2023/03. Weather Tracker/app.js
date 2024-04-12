function solve(){
    let loadHistoryBtn = document.querySelector('#load-history');
    let location = document.querySelector('#location');
    let temperature = document.querySelector('#temperature');
    let date = document.querySelector('#date');
    let url = 'http://localhost:3030/jsonstore/tasks/';
    let list = document.querySelector('#list');
    let editBtn = document.querySelector('#edit-weather');
    let addBtn = document.querySelector('#add-weather');

    addBtn.addEventListener('click', function() {
        let info = {
            "location": location.value,
            "temperature": temperature.value,
            "date": date.value,
        }
        fetch(url, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(info)
        })
        .then(() => {
            allrecords(),
            clearInputs()
        })
    })

    loadHistoryBtn.addEventListener('click', function() {
        allrecords()
    })

    function allrecords(){
        list.innerHTML = '';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            let details = Object.values(data);
            details.forEach(element => {
                let container = document.createElement('div');
                container.classList.add('container');
                let city = document.createElement('h2');
                city.textContent = element.location;
                let currentDate = document.createElement('h3');
                currentDate.textContent = element.date;
                let celsius = document.createElement('h3');
                celsius.id = 'celsius';
                celsius.textContent = element.temperature;

                let buttonsContainer = document.createElement('div');
                buttonsContainer.classList.add('buttons-container');
                let changeBtn = document.createElement('button');
                changeBtn.classList.add('change-btn')
                changeBtn.textContent = 'Change';
                let deleteBtn = document.createElement('button');
                deleteBtn.classList.add('delete-btn')
                deleteBtn.textContent = 'Delete';
                buttonsContainer.appendChild(changeBtn);
                buttonsContainer.appendChild(deleteBtn);

                container.appendChild(city)
                container.appendChild(currentDate)
                container.appendChild(celsius)
                container.appendChild(buttonsContainer)
                list.appendChild(container)

                changeBtn.addEventListener('click', function() {
                    location.value = city.textContent;
                    date.value = currentDate.textContent;
                    temperature.value = celsius.textContent;
                    container.remove();
                    addBtn.disabled = true
                    editBtn.disabled = false
                    editBtn.addEventListener('click', function() {
                        let info = {
                            "location": location.value,
                            "temperature": temperature.value,
                            "date": date.value,
                        }
                        fetch(url + element._id, {
                            method: "PUT",
                            headers: {"content-type": "application/json"},
                            body: JSON.stringify(info)
                        })
                        .then(() => {
                            allrecords()
                            addBtn.disabled = false
                            editBtn.disabled = true
                        })
                    })
                })

                deleteBtn.addEventListener('click', function() {
                    fetch(url + element._id, {
                        method: "DELETE",
                        headers: {"content-type": "application/json"}
                    })
                    .then(() => allrecords())
                })
            })
        })
    }

    function clearInputs(){
        temperature.value = '',
        location.value = '',
        date.value = ''
    }

}

solve();