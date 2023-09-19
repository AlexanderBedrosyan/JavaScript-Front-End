function calculateResourcesNeeded(rows, increment){
    let stones = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let steps = 0;
    for (let index = rows; index > 0; index -= 2){
        steps += 1;
        if (index - 2 > 0){
            stones += (((index - 2) * (index - 2)) * increment);
            if (steps % 5 != 0){
                marble += ((index - 1) * 4) * increment
            } else {
                lapis += ((index - 1) * 4) * increment
            }
        }
        if (index - 2 < 0) {
            gold = (((index - 2) * (index - 2)) * increment)
            break
        } else if (index - 2 === 0) {
            gold = (index * index * increment)
        }
    }
    console.log(`Stone required: ${Math.ceil(stones)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(steps * increment)}`)
}

