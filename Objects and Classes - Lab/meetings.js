function solve(arr){
    let obj = {};
    for (const element of arr) {
        let [day, name] = element.split(' ');
        if (day in obj){
            console.log(`Conflict on ${day}!`)
        } else {
            obj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    Object.entries(obj).map(([key, value]) => console.log(`${key} -> ${value}`))
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)