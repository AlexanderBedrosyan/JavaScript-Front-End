function buyFruits(fruit, weightGrams, pricePerKilogram){
    let weightGramsToKilograms = weightGrams / 1000
    let amountNeeded = weightGramsToKilograms * pricePerKilogram
    console.log(`I need $${amountNeeded.toFixed(2)} to buy ${weightGramsToKilograms.toFixed(2)} kilograms ${fruit}.`)
}
