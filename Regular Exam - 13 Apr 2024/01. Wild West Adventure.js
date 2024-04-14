function solve(arr){
    let n = Number(arr.shift());
    let heroes = {}
    const maxCapacity = 6;
    const healthMax = 100; 

    while (n > 0) {
        n -= 1
        let details = arr.shift();
        let [heroName, hp, bullets] = details.split(' ');

        if (Number(hp) > healthMax) {
            hp = 100;
        }

        heroes[heroName] = {}
        heroes[heroName]['hp'] = Number(hp);
        heroes[heroName]['bullets'] = Number(bullets);
    }

    while (arr.length > 0) {
        let line = arr.shift();
        if (line === "Ride Off Into Sunset" ) {
            break
        }

        let details = line.split(' - ');
        let command = details.shift();

        if (command === 'FireShot'){
            let name = details[0];
            let target = details[1];
            if (heroes[name]['bullets'] > 0) {
                heroes[name]['bullets'] -= 1;
                console.log(`${name} has successfully hit ${target} and now has ${heroes[name]['bullets']} bullets!`)
            } else {
                console.log(`${name} doesn't have enough bullets to shoot at ${target}!`)
            }
        } else if (command === 'TakeHit') {
            let name = details[0];
            let damage = details[1];
            let attacker = details[2];

            heroes[name]['hp'] -= Number(damage);
            if (heroes[name]['hp'] > 0) {
                console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${heroes[name]['hp']} HP!`)
            } else {
                delete heroes[name];
                console.log(`${name} was gunned down by ${attacker}!`)
            }
        } else if (command === 'Reload') {
            let name = details[0]
            if (heroes[name]['bullets'] < maxCapacity) {
                let numberOfBullets = maxCapacity - heroes[name]['bullets'];
                heroes[name]['bullets'] = maxCapacity;
                console.log(`${name} reloaded ${numberOfBullets} bullets!`)
            } else {
               console.log(`${name}'s pistol is fully loaded!`) 
            }
        } else if (command === 'PatchUp') {
            let name = details[0];
            let amount = details[1]
            if (heroes[name]['hp'] < healthMax) {
                let neededHealth = 0;
                if ((heroes[name]['hp'] + Number(amount)) > healthMax) {
                    neededHealth = healthMax - heroes[name]['hp'];
                    heroes[name]['hp'] = 100;
                } else {
                    neededHealth = Number(amount);
                    heroes[name]['hp'] += neededHealth;
                }
                console.log(`${name} patched up and recovered ${neededHealth} HP!`)
            } else {
               console.log(`${name} is in full health!`) 
            }
        }
    }

    for (const name in heroes) {
        console.log(name);
        console.log(`HP: ${heroes[name]['hp']}`)
        console.log(`Bullets: ${heroes[name]['bullets']}`)
    }
}

solve((["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
 "TakeHit - Walt - 30 - Bandit",
 "PatchUp - Walt - 20" ,
 "Reload - Jesse",
 "Ride Off Into Sunset"])
)