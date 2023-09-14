function censoredWords(stringForChanges, neededWord){
    let newWord = '*'.repeat(neededWord.length);
    while (stringForChanges.includes(neededWord)){
        stringForChanges = stringForChanges.replace(neededWord, newWord);
    }
    console.log(stringForChanges)
}
