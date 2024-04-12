function solve(arr) {
    let n = Number(arr.shift());
    let information = {};
    const maxCapacity = 100;

    while (n > 0) {
        n -= 1
        let details = arr.shift().split('|');
        information[details[0]] = {};
        information[details[0]]["fuelCapacity"] = Number(details[1])
        information[details[0]]["position"] = Number(details[2]);
    }

    while (arr) {
        let info = arr.shift();
        if (info === 'Finish') {
            break
        }

        let details = info.split(' - ');
        command = details.shift();

        if (command === "StopForFuel") {
            let rider = details[0]
            let minimumFuel = details[1]
            let changedPosition = details[2]
            if (minimumFuel > information[rider]["fuelCapacity"]) {
                information[rider]["position"] = changedPosition;
                console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`)
            } else {
                console.log(`${rider} does not need to stop for fuel!`)
            }
        } else if (command === "Overtaking") {
            let firstRider = details[0]
            let secondRider = details[1]
            if (information[firstRider]["position"] < information[secondRider]["position"]) {
                let tempPosition = information[firstRider]["position"];
                information[firstRider]["position"] = information[secondRider]["position"];
                information[secondRider]["position"] = tempPosition;
                console.log(`${firstRider} overtook ${secondRider}!`)
            }
        } else {
            let rider = details[0];
            let lapsLeft = details[1];
            console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
            delete information[rider];
        }
    }

    for (const key in information) {
        console.log(key)
        console.log(`Final position: ${information[key]["position"]}`)
    }
}

solve(
    (["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])

)