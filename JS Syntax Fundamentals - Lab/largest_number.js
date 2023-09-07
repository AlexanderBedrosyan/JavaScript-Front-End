function largest_number(num1, num2, num3){
    let arr = [num1, num2, num3].sort((a, b) => a - b)
    console.log(`The largest number is ${arr.pop()}.`);
}
