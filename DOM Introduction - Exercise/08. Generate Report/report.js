function generateReport() {
    let allInputs = Array.from(document.querySelectorAll('input[type=checkbox]'));
    let details = Array.from(document.querySelectorAll('tbody > tr'));
    let indexNeeded = [];
    allInputs.forEach((element, index) => {if (element.checked) indexNeeded.push(index)})
    let finalResult = [];
    details.forEach(element => {
        let currObj = {}
        indexNeeded.forEach(ind => currObj[allInputs[ind].name] = element.children[ind].textContent)
        finalResult.push(currObj)
    })
    document.querySelector('#output').value = JSON.stringify(finalResult);
}