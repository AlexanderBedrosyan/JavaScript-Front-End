function solve(arr){
    let obj = [];
    arr.forEach(element => {
        obj.push({name: element, number: element.length})
    });
    obj.forEach((person) => console.log(`Name: ${person['name']} -- Personal Number: ${person['number']}`))
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )