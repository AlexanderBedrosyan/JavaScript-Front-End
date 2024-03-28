function toggle() {
    let buttonText = document.querySelector('span[class=button]');
    let div = document.querySelector('#extra')
    switch (buttonText.textContent){
        case 'More':
            buttonText.textContent = 'Less';
            div.style.display = 'block';
            break;
        case 'Less':
            buttonText.textContent = 'More';
            div.style.display = 'none';
            break;
    }
}