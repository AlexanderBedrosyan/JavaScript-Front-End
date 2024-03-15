function solve(...someNumbers){
    let newResult = sum(someNumbers[0], someNumbers[1]);
    console.log(subtract(newResult, someNumbers[2]));


    function sum(num1, num2){
        return num1 + num2;
    };
    function subtract(num1, num2){
        return num1 - num2;
    }
}

solve(23, 6, 10)

function solve2(...someNumbers){
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    console.log(subtract(sum(someNumbers[0], someNumbers[1]), someNumbers[2]));
}

solve2(23, 6, 10)