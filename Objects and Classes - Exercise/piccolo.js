function solve(array){
    let parkingCars = [];
    for (let i = 0; i < array.length; i++){
        let [direction, carNumber] = array[i].split(', ');
        if (direction === 'IN'){
            if (!(parkingCars.includes(carNumber))){
                parkingCars.push(carNumber)
            }
        } else {
            if (parkingCars.includes(carNumber)){
                let ind = parkingCars.indexOf(carNumber);
                parkingCars.splice(ind, 1);
            }
        }
    }
    console.log(parkingCars.sort((a, b) => a.localeCompare(b)).join('\n'))

}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)