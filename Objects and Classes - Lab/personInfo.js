function solve(first, last, personAge){
    let obj = {firstName: first, lastName: last, age: personAge};
    return obj
}

// function solve2(first, last, personAge) {
//     const obj = {
//         firstName: first,
//         lastName: last,
//         age: personAge
//     };

//     Object.entries(obj).map(([key, value]) => console.log(`${key}: ${value}`));
// }


console.log(solve("Peter", 
"Pan",
"20"
))