function calculatePrice(peopleCount, groupType, dayType) {



    let personPrice = 0;
    let totalPrice = 0;


    if (groupType === 'Students') {

        switch (dayType) {
            case 'Friday': personPrice = 8.45; break;
            case 'Saturday': personPrice = 9.80; break;
            case 'Sunday': personPrice = 10.46; break;
        }
    } else if (groupType === 'Business') {

        switch (dayType) {
            case 'Friday': personPrice = 10.90; break;
            case 'Saturday': personPrice = 15.60; break;
            case 'Sunday': personPrice = 16.00; break;
        }
    } else if (groupType === 'Regular') {

        switch (dayType) {
            case 'Friday': personPrice = 15.00; break;
            case 'Saturday': personPrice = 20.00; break;
            case 'Sunday': personPrice = 22.50; break;
        }
    }

    if (groupType === 'Students' && peopleCount >= 30) {

        totalPrice = (peopleCount * personPrice) * 0.85;

    } else if (groupType === 'Business' && peopleCount >= 100) {

        peopleCount -= 10;
        totalPrice = peopleCount * personPrice;

    } else if ((groupType === 'Regular') && (peopleCount >= 10 && peopleCount <= 20)) {

        totalPrice = (peopleCount * personPrice) * 0.95;

    } else {

        //console.log(peopleCount);
        //console.log(personPrice);
        totalPrice = (peopleCount * personPrice);
    }



    //output
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}