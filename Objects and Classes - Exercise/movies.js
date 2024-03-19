function solve(arr){
    let obj = {};
    for (const element of arr) {
        if (element.includes('addMovie')){
            let info = element.split('addMovie');
            let movieName = info[1].trimStart();
            obj[movieName] = {};
        } else if (element.includes('directedBy')) {
            let [movieName, director] = element.split(' directedBy ');
            if (movieName in obj){
                obj[movieName]['director'] = director;
            }
        } else {
            let [movieName, date] = element.split(' onDate ');
            if (movieName in obj){
                obj[movieName]['date'] = date;
            }
        }
    } 

    for (const movieName in obj) {
        let finalResult = {name: movieName};
        let information = Object.entries(obj[movieName]);
        if (information.length == 2){
            information.forEach(element => {
                finalResult[element[0]] = element[1];
            });
            console.log(JSON.stringify(finalResult));
        }
    }
}

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]    
    )