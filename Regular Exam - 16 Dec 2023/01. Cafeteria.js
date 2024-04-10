function solve(arr){
    let n = Number(arr.shift());
    let baristaInfo = {};
    let closed = arr.pop();

    for (let i = 0; i < n; i ++){
        let [name, shift, sentence] = arr.shift().split(' ');
        let drinks = [];
        sentence.split(',').forEach(element => drinks.push(element));
        baristaInfo[name] = {};
        baristaInfo[name][shift] = drinks;
    }

    arr.forEach(element => {
        let details = element.split(' / ');
        command = details.shift();
        if (command === 'Prepare'){
            let [name, shift, coffeeType] = details;
            if (name in baristaInfo && shift in baristaInfo[name] && baristaInfo[name][shift].includes(coffeeType)) {
                console.log(`${name} has prepared a ${coffeeType} for you!`)
            } else {
                console.log(`${name} is not available to prepare a ${coffeeType}.`)
            }
        } else if (command === 'Change Shift') {
            let [name, shift] = details;
            if (name in baristaInfo){
                let productTypes = Object.values(baristaInfo[name])[0];
                baristaInfo[name] = {};
                baristaInfo[name][shift] = productTypes;
            }
            console.log(`${name} has updated his shift to: ${shift}`)
        } else {
            let [name, newCoffeeType] = details;
            if (!(Object.values(baristaInfo[name])[0].includes(newCoffeeType))){
                let allProducts = Object.values(baristaInfo[name])[0];
                let shift = Object.keys(baristaInfo[name])[0];
                allProducts.push(newCoffeeType)
                baristaInfo[name] = {};
                baristaInfo[name][shift] = allProducts;
                console.log(`${name} has learned a new coffee type: ${newCoffeeType}.`);
            } else {
                console.log(`${name} knows how to make ${newCoffeeType}.`)
            }
        }
    })
    
    for (const key in baristaInfo) {
        let shift = Object.keys(baristaInfo[key])[0];
        let products = Object.values(baristaInfo[key])[0];
        console.log(`Barista: ${key}, Shift: ${shift}, Drinks: ${products.join(', ')}`)
    }
}

// solve([
//     '3',
//       'Alice day Espresso,Cappuccino',
//       'Bob night Latte,Mocha',
//       'Carol day Americano,Mocha',
//       'Prepare / Alice / day / Espresso',
//       'Change Shift / Bob / night',
//       'Learn / Carol / Latte',
//       'Learn / Bob / Latte',
//       'Prepare / Bob / night / Latte',
//       'Closed']
// )

solve([
    '1',
    'Bob night Latte,Mocha',
    'Learn / Bob / Mocha',
    'Closed'
])