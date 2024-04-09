function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.querySelector('#main');
    const div = document.querySelector('.profile');

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let information = Object.values(data)
            fillDetails(information)
        })

    function fillDetails(infoObj){
        let arrOfNodes = [];
        arrOfNodes.push(div);
        for (let i = 0; i < infoObj.length - 1; i ++){
            let clone = div.cloneNode(true);
            arrOfNodes.push(clone)
        }
        infoObj.forEach(element => {
            let currentDiv = arrOfNodes.shift();
            let name = currentDiv.querySelector('input[name=user1Username]');
            let lock = currentDiv.querySelector('input[value=unlock]');
            let email = currentDiv.querySelector('input[name=user1Email]');
            let age = currentDiv.querySelector('input[name=user1Age]');
            let button = currentDiv.querySelector('button');
            let hiddenInformation = currentDiv.querySelector('.user1Username');
            hiddenInformation.style.display = 'none'

            button.addEventListener('click', function() {
                if (lock.checked && button.textContent === 'Show more'){
                    hiddenInformation.style.display = 'block'
                    button.textContent = 'Hide it'
                } else if (lock.checked && button.textContent === 'Hide it'){
                    hiddenInformation.style.display = 'none';
                    button.textContent = 'Show more'
                }
            })

            email.value = element.email;
            age.value = element.age;
            name.value = element.username;
            main.appendChild(currentDiv);
        })
    }
}