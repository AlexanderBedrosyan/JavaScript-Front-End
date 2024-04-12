function solve(){ 
    let url = 'http://localhost:3030/jsonstore/tasks/';
    let loadVacations = document.querySelector('#load-vacations');
    let list = document.querySelector('#list');
    let addVacation = document.querySelector('#add-vacation')
    let editVacation = document.querySelector('#edit-vacation')
    let name = document.querySelector('#name');
    let days = document.querySelector('#num-days');
    let date = document.querySelector('#from-date');

    loadVacations.addEventListener('click', function() {
        showAllVacations();
    })

    addVacation.addEventListener('click', function(event) {
        event.preventDefault()
        let information = {
            "name": name.value,
            "days": days.value,
            "date": date.value
        }
        fetch(url, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(information)
        })
        .then(() => {
            showAllVacations()
            clearInputs()
        })
    })

    function showAllVacations() {
        list.innerHTML = '';

        fetch(url)
        .then(response => response.json())
        .then(data => {
            let details = Object.values(data)
            details.forEach(element => {

                let container = document.createElement('div');
                container.classList.add('container');

                let h2name = document.createElement('h2');
                h2name.textContent = element.name;

                let h3date = document.createElement('h3');
                h3date.textContent = element.date;

                let daysH3 = document.createElement('h3');
                daysH3.textContent = element.days;

                let changeBtn = document.createElement('button');
                changeBtn.classList.add('change-btn');
                changeBtn.textContent = 'Change';

                let doneBtn = document.createElement('button');
                doneBtn.classList.add('done-btn');
                doneBtn.textContent = 'Done';

                container.appendChild(h2name);
                container.appendChild(h3date);
                container.appendChild(daysH3);
                container.appendChild(changeBtn);
                container.appendChild(doneBtn);

                list.appendChild(container);

                changeBtn.addEventListener('click', function() {
                    name.value = h2name.textContent;
                    days.value = daysH3.textContent;
                    date.value = h3date.textContent;
                    
                    addVacation.disabled = true;
                    editVacation.disabled = false;

                    container.remove();

                    editVacation.addEventListener('click', function(event) {
                        event.preventDefault();
                        let information = {
                            "name": name.value,
                            "days": days.value,
                            "date": date.value
                        }
                        fetch(url + element._id, {
                            method: "PUT",
                            headers: {"content-type": "application/json"},
                            body: JSON.stringify(information)
                        })
                        .then(() => {
                            showAllVacations()
                            addVacation.disabled = false;
                            editVacation.disabled = true;
                            clearInputs();
                        })
                    })
                })

                doneBtn.addEventListener('click', function() {
                    fetch(url + element._id, {
                        method: "DELETE",
                        headers: {"content-type": "application/json"}
                    })
                    .then(() => showAllVacations())
                })
            })
        })
    }

    function clearInputs() {
        name.value = '';
        date.value = '';
        days.value = '';
    }
}

solve()