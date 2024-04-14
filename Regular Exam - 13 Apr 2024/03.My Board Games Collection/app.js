function solve(){
    let gameName = document.querySelector('#g-name');
    let typeOfGame = document.querySelector('#type');
    let players = document.querySelector('#players');
    let loadBtn = document.querySelector('#load-games')
    let addBtn = document.querySelector('#add-game');
    let editBtn = document.querySelector('#edit-game');
    let list = document.querySelector('#games-list');
    let url = 'http://localhost:3030/jsonstore/games/';

    addBtn.addEventListener('click', function() {
        let info = {
            "name": gameName.value,
            "type": typeOfGame.value,
            "players": players.value
        }

        fetch(url, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(info)
        })
        .then(() => {
            allGames()
            changeInputs('', '', '')
        })
    })

    loadBtn.addEventListener('click', function() {
        allGames()
    })

    function changeInputs(currName, currType, currPlayers) {
        gameName.value = currName;
        typeOfGame.value = currType;
        players.value = currPlayers;
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

    function allGames(){
        list.innerHTML = ''
        fetch(url)
        .then(response => response.json())
        .then(data => {
            let details = Object.values(data);
            details.forEach(element => {
                let boardGame = elementCreator('div', null, ["board-game"], '');

                let content = elementCreator('div', null, ["content"], '');
                let pName = elementCreator('p', null, [], element.name);
                let pPlayers = elementCreator('p', null, [], element.players);
                let pTypeOfGame = elementCreator('p', null, [], element.type);
                content = addChilds(content, [pName, pPlayers, pTypeOfGame])

                let container = elementCreator('div', null, ["buttons-container"], "");
                let changeBtn = elementCreator('button', null, ["change-btn"], "Change");
                let deleteBtn = elementCreator('button', null, ["delete-btn"], "Delete");

                container = addChilds(container, [changeBtn, deleteBtn]);
                boardGame = addChilds(boardGame, [content, container])
                list = addChilds(list, [boardGame])

                changeBtn.addEventListener('click', function() {
                    changeInputs(pName.textContent, pTypeOfGame.textContent, pPlayers.textContent)
                    editBtn.disabled = false;
                    addBtn.disabled = true;

                    editBtn.addEventListener('click', function() {
                        let info = {
                            "name": gameName.value,
                            "type": typeOfGame.value,
                            "players": players.value
                        }
    
                        fetch(url + element._id, {
                            method: "PUT",
                            headers: {"content-type": "application/json"},
                            body: JSON.stringify(info)
                        })
                        .then(() => {
                            editBtn.disabled = true
                            addBtn.disabled = false
                            allGames();
                            changeInputs('', '', '')
                        })
                    })

                })

                deleteBtn.addEventListener('click', function() {
                    fetch(url + element._id, {
                        method: "DELETE",
                        headers: {"content-type": "application/json"}
                    })
                    .then(() => allGames())
                })
            })
        })
    }
}

solve();