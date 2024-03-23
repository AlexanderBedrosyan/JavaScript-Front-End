function solve(array){
    let information = {};
    for (const iterator of array) {
        let [garage, details] = iterator.split(' - ');
        if (!(information.hasOwnProperty(garage))){
            information[garage] = [];
        }
        let splittedDetails = details.split(', ');
        let car = {};
        splittedDetails.forEach(element => {
            let [elementInfo, value] = element.split(': ');
            car[elementInfo] = value;
        });
        information[garage].push(car)
        
    }
    
    for (const number in information) {
        console.log(`Garage № ${number}`)
        information[number]
            .forEach(element =>
                console.log(`--- ${Object.keys(element).map(a => `${a} - ${element[a]}`).join(', ')}`) 
            )
    }

}

solve(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);