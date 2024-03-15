function solve(arr){
    let obj = {};
    arr.forEach(element => {
        let [name, address] = element.split(':');
        obj[name] = address
    });
    Object.entries(obj).sort(([keyA], [keyB]) => keyA.localeCompare(keyB)).forEach(([key, value]) => console.log(`${key} -> ${value}`))
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)