function focused() {
    let elements = Array.from(document.querySelectorAll('input[type=text]'));
    elements.forEach(el => {       
        el.addEventListener('focus', onElement);
        el.addEventListener('blur', outElement);
    })

    function onElement(event) {
        let clickedElement = event.target.parentNode;
        clickedElement.classList.add('focused');
    }

    function outElement(event) {
        let clickedElement = event.target.parentNode;
        clickedElement.classList.remove('focused');
    }
}