function wordsUppercase(word){
    let splittedWord = word.split(' ');
    let newArr = [];

    for (let index = 0; index < splittedWord.length; index++) {
        let currentWord = ''
        for (let index2 = 0; index2 < splittedWord[index].length; index2++) {
            if ((/[a-zA-Z]/).test(splittedWord[index][index2])) {
                currentWord += splittedWord[index][index2];
            }
        }
        newArr.push(currentWord.toUpperCase());

    }
    console.log(newArr.join(', '))
}

wordsUppercase('Hi, how are you?')