function BitcoinMining(arr){
    let bitcoin = 11949.16;
    let gramGold = 67.51;
    let total_amount_of_gold = 0;
    let dayOfFirstBitcoin = 0;

    for (let index = 1; index - 1 < arr.length; index++){
        let amountOfGoldPerDay = (arr[index - 1] * gramGold)
        if (index % 3 === 0){
            amountOfGoldPerDay *= 0.70
        }
        total_amount_of_gold += amountOfGoldPerDay
        if (total_amount_of_gold >= bitcoin && dayOfFirstBitcoin === 0){
            dayOfFirstBitcoin = index
        }
    }
    let boughtBitcoins = Math.floor(total_amount_of_gold / bitcoin).toFixed(0)
    console.log(`Bought bitcoins: ${boughtBitcoins}`)
    if (dayOfFirstBitcoin){
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`)
    }
    console.log(`Left money: ${(total_amount_of_gold - (boughtBitcoins * bitcoin)).toFixed(2)} lv.`)
}
