function subtract() {
    let result = document.querySelector('#result');
    let allNums = document.querySelectorAll('input');
    result.textContent = Number(allNums[0].value) - Number(allNums[1].value);
}