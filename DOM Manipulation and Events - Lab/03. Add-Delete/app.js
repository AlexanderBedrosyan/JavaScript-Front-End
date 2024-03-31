function addItem() {
    let ul = document.querySelector('#items');
    let li = document.createElement('li');
    let inputText = document.querySelector('input[id=newItemText]');
    li.textContent = inputText.value;
    let deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = '[Delete]'
    deleteButton.addEventListener('click', () => li.remove())
    li.appendChild(deleteButton);
    ul.appendChild(li);
    inputText.value = '';
}