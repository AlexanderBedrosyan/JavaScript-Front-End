function cookingByNumbers(numWord, operation1, operation2, operation3, operation4, operation5){
    let num = parseInt(numWord)
    let arr = [operation1, operation2, operation3, operation4, operation5]
    for (let index = 0; index < arr.length; index ++){
        switch (arr[index]) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num *= 0.80;
                break;
        }
        console.log(num)
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')