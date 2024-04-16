window.addEventListener('load', solve);

function solve() {
    let title = document.querySelector('#title');
    let description = document.querySelector('#description');
    let select = document.querySelector('#label');
    let points = document.querySelector('#points');
    let assignee = document.querySelector('#assignee');
    let createBtn = document.querySelector('#create-task-btn');
    let deleteTask = document.querySelector('#delete-task-btn');
    let section = document.querySelector('#tasks-section');
    let tasks = 0;
    let currentTotalPoints = 0;
    let pictures = {
        "Feature": "&#8865",
        "Low Priority Bug": "&#9737",
        "High Priority Bug": "&#9888"
    }
    let labelClases = {
    "feature": "feature",
    "low priority bug": "low-priority",
    "high priority bug": "high-priority"
        
    }

    createBtn.addEventListener('click', function() {
        if (checkInputs()) {
            return
        }
        tasks += 1
        let article = elementCreator('article', `task-${tasks}`, ["task-card"], '');
        let label = elementCreator('div', null, ["task-card-label", labelClases[select.value.toLowerCase()]], '')
        label.innerHTML = `${select.value} ${pictures[select.value]}`
        let h3 = elementCreator('h3', null, ["task-card-title"], title.value);
        let currentDescription = elementCreator('p', 'null', ["task-card-description"], description.value);
        let currentPoints = elementCreator('div', null, ["task-card-points"], `Estimated at ${points.value} pts`);
        let currentAssigne = elementCreator('div', null, ["task-card-assignee"], `Assigned to: ${assignee.value}`);
        let container = elementCreator('div', null, ["task-card-actions"], '');
        let deleteBtn = elementCreator('button', null, [], "Delete");
        container.appendChild(deleteBtn);

        article = addChilds(article, [label, h3, currentDescription, currentPoints, currentAssigne, container]);
        section.appendChild(article)
        let hiddenType = document.querySelector('[type="hidden"]');
        console.log(hiddenType)
        hiddenType.id = `task-${tasks}`

        updatePoints('+', currentTotalPoints, Number(points.value))
        currentTotalPoints += Number(points.value);
        changeInfoInputs('', '', '', '', '')

        deleteBtn.addEventListener('click', function() {
            let newLabel = label.textContent.split(' ');
            newLabel.pop()
            changeInfoInputs(h3.textContent, currentDescription.textContent, newLabel.join(" "), Number(currentPoints.textContent.split(' ')[2]), currentAssigne.textContent.split(': ')[1])
            deleteTask.disabled = false;
            createBtn.disabled = true;
            inputsStatusDisabled(true);

            deleteTask.addEventListener('click', function() {
                inputsStatusDisabled(false);
                changeInfoInputs('', '', '', '', '')
                deleteTask.disabled = true;
                createBtn.disabled = false;
                tasks -= 1;
                updatePoints('-', currentTotalPoints, Number(currentPoints.textContent.split(' ')[2]));
                currentTotalPoints -= Number(currentPoints.textContent.split(' ')[2])
                console.log(currentTotalPoints)
                article.remove()
            })
        })
    })

    function updatePoints(status, currentTotalPoints, points){
        let totalPoints = document.querySelector('#total-sprint-points');
        if (status === '-'){
            totalPoints.textContent = `Total Points ${currentTotalPoints - points}pts`
        } else {
            totalPoints.textContent = `Total Points ${currentTotalPoints + points}pts`
        }
    }

    function inputsStatusDisabled(status) {
        title.disabled = status;
        description.disabled = status;
        select.disabled = status;
        points.disabled = status;
        assignee.disabled = status;
    }

    function changeInfoInputs(newTitle, newDescr, newSelect, newPoints, newAssignee) {
        title.value = newTitle;
        description.value = newDescr;
        select.value = newSelect;
        points.value = newPoints;
        assignee.value = newAssignee;
    }

    function checkInputs() {
        return title.value.trim() === '' || description.value.trim() === '' || select.value.trim() === '' || points.value.trim() === '' || assignee.value.trim() === ''
    }

    function elementCreator(type, id, currentClass, content) {
        let newElement = document.createElement(type);
        if (id) {
            newElement.id = id
        }
        if (currentClass.length > 0){
            currentClass.forEach(element => {
                newElement.classList.add(element);
            });
        }
        newElement.textContent = content;
        return newElement
    }

    function addChilds(parent, listOfChilds){
        listOfChilds.forEach(element => parent.appendChild(element))
        return parent
    }
}