function theatrePromotions(day, age){
    let dict = null;
    if (0 <= age && age <= 18) {
        let dict = {
            Weekday: 12,
            Weekend: 15,
            Holiday: 5
        };
        console.log(`${dict[day]}$`)
    } else if (18 < age && age <= 64)  {
        let dict = {
            Weekday: 18,
            Weekend: 20,
            Holiday: 12
        };
        console.log(`${dict[day]}$`)
    } else if (64 < age && age <= 122) {
        let dict = {
            Weekday: 12,
            Weekend: 15,
            Holiday: 10
        };
        console.log(`${dict[day]}$`)
    } else {
        console.log("Error!")
    }    
}

