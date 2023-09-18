function checkForString(word, text){
    let flag = false
    let arr = text.split(' ')
    for (currentWord of arr){
        if (currentWord.toLowerCase() === word.toLowerCase()){
            flag = !flag;
        }
    }
    if (flag){
        console.log(word)
    } else {
        console.log(`${word} not found!`)
    }
}
