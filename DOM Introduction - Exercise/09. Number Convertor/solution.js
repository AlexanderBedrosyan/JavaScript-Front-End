function solve() {
    const numberElement = document.getElementById('input');
    const selectMenuTo = document.getElementById('selectMenuTo');


    const convertBtn = document.querySelector('button');
    const binaryElement = selectMenuTo.querySelector('option');
    binaryElement.value = 'binary';
    binaryElement.textContent = 'Binary';

    const hexadecimalElement = document.createElement('option');
    hexadecimalElement.value = 'hexadecimal';
    hexadecimalElement.textContent = 'Hexadecimal'
    selectMenuTo.appendChild(hexadecimalElement)


    const result = document.getElementById('result');
    const convert = {
        'binary': convertToBinary,
        'hexadecimal': convertToHexadecimal,
    }

    convertBtn.addEventListener('click', () => convert[selectMenuTo.value]())

    function convertToBinary() {

        const number = Number(numberElement.value);
        result.value = number.toString(2);
    }

    function convertToHexadecimal() {
        const number = Number(numberElement.value);
        result.value = number.toString(16).toUpperCase();
    }

}