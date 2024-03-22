function solve(array){
    let leaders = [];
    let information = {};
    array.forEach(element => {
        if (element.includes('arrives')){ 
            let leader = element.split(' arrives')[0];
            leaders.push(leader);
        } else if (element.includes(': ')){
            let [leader, details] = element.split(': ');
            let [armyName, countArmy] = details.split(', ');
            if (leaders.includes(leader)){
                if (!(information.hasOwnProperty(leader))){
                    information[leader] = {}
                }
                information[leader][armyName] = Number(countArmy);              
            }
        } else if (element.includes(' + ')){
            let [armyName, countArmy] = element.split(' + ');
            Object.keys(information).forEach(element => {
                Object.keys(information[element]).forEach(army => {
                    if (army === armyName) {
                        information[element][army] += Number(countArmy);
                    }
                })
            })
        } else if (element.includes('defeated')) {
            let leader = element.split(' defeated')[0];
            delete information[leader]
        }
    })
    
    let totalLeaderArmy = {};
    for (const key in information) {
        let sum = Object.values(information[key]).reduce((a, b) => a + b, 0);
        totalLeaderArmy[key] = sum;
    };
    
    let sortedLeaders = {}
    Object.entries(totalLeaderArmy)
        .sort((a, b) => b[1] - a[1])
        .forEach((element) => sortedLeaders[element[0]] = element[1]);
    
    for (const key in sortedLeaders) {
        console.log(`${key}: ${sortedLeaders[key]}`)
        Object.entries(information[key])
            .sort((a, b) => b[1] - a[1])
            .forEach((element) => console.log(`>>> ${element[0]} - ${element[1]}`));  
    }
}

solve(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])