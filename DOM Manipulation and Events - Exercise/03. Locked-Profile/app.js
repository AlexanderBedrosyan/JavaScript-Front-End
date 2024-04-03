function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('div > button'));
    buttons.forEach(element => element.addEventListener('click', function() {
        let unlock = element.parentNode.querySelector('input[value=unlock]');
        if (unlock.checked) {
            if (element.textContent === 'Show more'){
                let div = element.parentNode.querySelector('div');
                div.style.display = 'block';
                element.textContent = 'Hide it'
            } else {
                let div = element.parentNode.querySelector('div');
                div.style.display = 'none';
                element.textContent = 'Show more'
            }
        }
    }))
}