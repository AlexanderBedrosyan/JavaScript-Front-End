function printAndSum(startNum, endNum){
    let arr = []
    while(startNum <= endNum){
        arr.push(startNum)
        startNum ++
    }

    let sum = arr.reduce(function(a, b){
        return a + b;
      });

    console.log(arr.join(' '))
    console.log(`Sum: ${sum}`)
}
