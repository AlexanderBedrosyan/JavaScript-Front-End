function calculate(number1, number2, operator){
    let operators = {
        'multiply': (num1, num2) => num1 * num2,
        'divide': (num1, num2) => num1 / num2,
        'add': (num1, num2) => num1 + num2,
        'subtract': (num1, num2) => num1 - num2
    }
    console.log(operators[operator](number1, number2))
}
