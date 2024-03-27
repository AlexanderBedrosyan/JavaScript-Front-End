function sumTable() {
    let table = Array.from(document.querySelectorAll('tr td:nth-of-type(2)'))
    let result = 0;
    for (let num of table){
        result += Number(num.textContent)
    }
    document.getElementById('sum').textContent = result
}