function addItem() {
    let text = document.querySelector('#newItemText');
    let value = document.querySelector('#newItemValue');
    let option = document.createElement('option');
    let select = document.querySelector('#menu');
    option.value = value.value;
    option.textContent = text.value;
    select.appendChild(option)
    value.value = '';
    text.value = '';
}