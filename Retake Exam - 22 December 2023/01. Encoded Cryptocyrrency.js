function solve(arr){
    let message = arr.shift();
    for (const command of arr) {
        if (command.includes('TakeEven')){
            let listOfMessageElements = message.split('');
            let newMessage = '';
            for (let i = 0; i < listOfMessageElements.length; i ++){
                if (i % 2 === 0){
                    newMessage += listOfMessageElements[i];
                }
            }
            message = newMessage;
            console.log(message)
        } else if (command.includes('ChangeAll')) {
            let [notNeeded, substring, replacement] = command.split('?');
            while (message.includes(substring)){
                message = message.replace(substring, replacement)
            }
            console.log(message)
        } else if (command.includes('Reverse')) {
            let [notNeeded, reverseWord] = command.split('?');
            let word = reverseWord.split('').reverse().join('');
            if (message.includes(reverseWord)){
                message = message.replace(reverseWord, '');
                message += word;
                console.log(message);
            } else {
                console.log('error');
            }
        } else {
            console.log(`The cryptocurrency is: ${message}`);
        }
    }
};

solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"])
)