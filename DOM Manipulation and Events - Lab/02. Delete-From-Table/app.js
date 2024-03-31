function deleteByEmail() {
    const information = Array.from(document.querySelectorAll('tbody > tr'));
    const email = document.querySelector('input[name=email]');
    let condition = document.querySelector('#result');
    let finalMessage = 'Not found.'
    information.forEach(element => {
        if (element.children[1].textContent === email.value){
            element.remove();
            finalMessage = 'Deleted.'
        }
    })

    condition.textContent = finalMessage
}