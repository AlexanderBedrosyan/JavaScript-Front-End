function solve(arr){
    let information = [];
    for (const iterator of arr) {
        let [name, levelAmount, items] = iterator.split(' / ');
        let obj = {Hero: name, level: Number(levelAmount), items};
        information.push(obj)
    }

    let sortedInformation = information.sort((a, b) => a['level'] - b['level'])
    sortedInformation.forEach(element => {
        console.log(`Hero: ${element['Hero']}\nlevel => ${element['level']}\nitems => ${element['items']}`)
    });
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]    
    )