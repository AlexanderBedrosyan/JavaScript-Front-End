function solve(sentence){
    let obj = {};
    sentence.split(' ').forEach(element => {
        if (!(element.toLowerCase() in obj)){
            obj[element.toLowerCase()] = 0;
        }
        obj[element.toLowerCase()] += 1;
    });

    let result = [];
    Object.entries(obj).forEach(element => {
        if (element[1] % 2 !== 0){
            result.push(element[0]);
        }
    });
    return result.join(' ');
}

console.log(solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));