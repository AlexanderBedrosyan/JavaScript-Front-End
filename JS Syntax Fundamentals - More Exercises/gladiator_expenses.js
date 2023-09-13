function gladiatorExpenses(
    lostFightsCount,
    helmetPrice,
    swordPrice,
    shieldPrice,
    armorPrice
    ){
    expenses = 0
    counter = 1
    for (let index = 1; index <= lostFightsCount; index++){
        if (index % 2 === 0){
            expenses += helmetPrice;
        }
        if (index % 3 === 0){
            expenses += swordPrice;
        }
        if (index % 6 === 0){
            if (counter % 2 == 0){
                expenses += (shieldPrice + armorPrice);
            } else {
                expenses += shieldPrice;
            }
            counter += 1
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)    
    }

gladiatorExpenses(
7,
2,
3,
4,
5
)