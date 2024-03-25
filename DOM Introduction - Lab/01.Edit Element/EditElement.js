function editElement(element, oldText, newText) {
    while (element.textContent.includes(oldText)){
        element.textContent = element.textContent.replace(oldText, newText);
    }
}