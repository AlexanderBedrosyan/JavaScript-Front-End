function sliceString(word, startingNum, endingNum){
    if (startingNum < 0) {
        startingNum = 0;
    }
    let new_word = word.split("");
    counter = 0;
    final_word = '';
    for (let index = startingNum; index < new_word.length; index++){
        counter += 1;
        if (counter > endingNum){
            break
        }
        final_word += new_word[index];
    }
    console.log(final_word)
}
