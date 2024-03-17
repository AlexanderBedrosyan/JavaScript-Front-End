function solve(arr){
    let obj = {};
    for (const element of arr) {
        let [name, phone] = element.split(' ');
        obj[name] = phone
    }
    Object.entries(obj).map(([key, value]) => console.log(`${key} -> ${value}`))
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);