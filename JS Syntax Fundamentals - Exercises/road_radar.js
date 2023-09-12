function roadRadar(km, area){
    let limit = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }
    if (limit[area] >= km){
        console.log(`Driving ${km} km/h in a ${limit[area]} zone`)
    } else {
        let difference = km - limit[area]
        let status = null
        if (difference <= 20 ) {
            status = 'speeding'
        } else if (difference <= 40) {
            status = 'excessive speeding'
        } else {
            status = 'reckless driving'
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit[area]} - ${status}`)
    }
}