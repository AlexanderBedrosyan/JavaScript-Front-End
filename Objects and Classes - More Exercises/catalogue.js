function solve(array){
    let information = {};
    
    array.forEach(element => {
        let [productName, productPrice] = element.split(' : ');
        information[productName] = productPrice;
    });

    let sortedInformation = {};

    Object.keys(information)
    .sort((a, b) => a.localeCompare(b))
    .forEach((element) => sortedInformation[element] = information[element]);

    let startingLetter = NaN;
    for (const key in sortedInformation) {
        if (!(key[0] === startingLetter)){
            startingLetter = key[0];
            console.log(startingLetter)
        }
        console.log(`  ${key}: ${sortedInformation[key]}`)
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )