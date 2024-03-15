function solve(obj){
    Object.entries(obj).map(([key, value]) => console.log(`${key} -> ${value}`));
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)