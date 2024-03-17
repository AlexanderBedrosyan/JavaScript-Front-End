function solve(currentJSON){
    Object.entries(Object.entries(JSON.parse(currentJSON)).map(([key, value]) => console.log(`${key}: ${value}`)))
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')