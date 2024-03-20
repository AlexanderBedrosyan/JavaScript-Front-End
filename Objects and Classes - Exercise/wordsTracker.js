function solve(arr){
    let wordsNeeded = arr.shift().split(' ');
    let obj = {};
    wordsNeeded.forEach(element => {
        obj[element] = 0;
    });
    arr.forEach(element => {
        if (wordsNeeded.includes(element)){
            if (!(element in obj)){
                obj[element] = 0;
            }

            obj[element] += 1
        }
    });

    let sortedObj = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    let result = [];
    sortedObj.forEach(element => {
        result.push(`${element[0]} - ${element[1]}`);
    });
    return result.join('\n')
}

console.log(solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    ))