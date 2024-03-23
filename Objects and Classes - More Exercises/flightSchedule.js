function solve(array){
    let flightsOnSpecificSector = array.shift();
    let changedStatuses = array.shift();
    let flightStatus = array.shift()[0];
    let flights = {};

    for (const element of flightsOnSpecificSector) {
        let information = element.split(' ');
        let flightNumber = information.shift();
        let destination = information.join(' ');
        flights[flightNumber] = {destination, status: 'Ready to fly'};
        flights[flightNumber]
    }

    for (const element of changedStatuses) {
        let [flightNumber, status] = element.split(' ');
        if (flights.hasOwnProperty(flightNumber)){
            flights[flightNumber]['status'] = status;
        };
    }

    for (const key in flights) {
        if (flights[key]['status'] === flightStatus) {
            console.log(`{ Destination: '${flights[key]["destination"]}', Status: '${flights[key]["status"]}' }`);   
        }
    }
}

solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
)

solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]
)