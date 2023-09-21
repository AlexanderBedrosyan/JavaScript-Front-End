function signCheck(num1, num2, num3){
    let arr = [num1, num2, num3];
    let count_negative = 0;
    for (let el of arr){
        if (el < 0){
            count_negative ++
        }
    }
    if (count_negative % 2 == 0){
        console.log('Positive')
    } else {
        console.log('Negative')
    }
}

