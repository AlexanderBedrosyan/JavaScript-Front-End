function CountOfIncludedString(text, neededWord){
    let splittedText = text.split(" ");
    let counter = 0;
    for (let word of splittedText){
        if (word === neededWord){
            counter += 1;
        }
    }
    console.log(counter)
}

CountOfIncludedString('This is a word and it also is a sentence', 'is')