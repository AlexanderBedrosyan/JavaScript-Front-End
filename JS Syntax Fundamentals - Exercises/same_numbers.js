function checkNumbers(num){
    let numToString = num.toString()
    let firstNum = numToString[0]
    let flag = true
    let sum = 0
    for (let index = 0; index < numToString.length; index ++){
        if (firstNum !== numToString[index]){
            flag = false; 
        }
        sum += parseInt(numToString[index])
    }
    console.log(flag)
    console.log(sum)
}

checkNumbers(22223)