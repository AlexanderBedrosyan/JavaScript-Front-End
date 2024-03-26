function extractText() {
    let liElements = Array.from(document.querySelectorAll('li'));
    let textArea = document.getElementById('result');
    liElements.forEach(element => textArea.value += element.textContent + '\n')
}