function solve(arr){
    let result = [];
    arr.forEach((element) => {
        let [name, latitude, longitude] = element.split(' | ');
        let lat = Number(latitude).toFixed(2);
        let long = Number(longitude).toFixed(2);
        result.push({name, lat, long})
    });
    result.map((destination) => console.log(`{ town: '${destination['name']}', latitude: '${destination['lat']}', longitude: '${destination['long']}' }`))
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)