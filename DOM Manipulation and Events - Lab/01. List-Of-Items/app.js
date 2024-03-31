function addItem() {
    const ulTag = document.getElementById('items');
    const text = document.querySelector('input[type=text]');
    const newLi = document.createElement('li');
    newLi.textContent = text.value;
    ulTag.appendChild(newLi);
    text.value = '';
}