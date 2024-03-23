function solve(array){
    const information = {};

    for (const element of array){
        let [nameDetals, grade, averageScore] = element.split(', ')
        let numberAvgScore = Number(averageScore.split(': ')[1]);
        let lastGrade = Number(grade.split(': ')[1]) + 1;
        let name = nameDetals.split(': ')[1];
        
        if (numberAvgScore > 3){
            if (!(information.hasOwnProperty(lastGrade))){
                information[lastGrade] = {'students': [], 'scores': []};
            }
            information[lastGrade]['students'].push(name);
            information[lastGrade]['scores'].push(numberAvgScore);
        }
    }
    let sortedInformation = {};

    Object.keys(information)
        .sort((a, b) => a - b)
        .forEach((element) => sortedInformation[element] = information[element]);
    
    for (const grade in sortedInformation) {
        let totalScore = sortedInformation[grade]['scores'].reduce((result, element) => result + element, 0) / sortedInformation[grade]['scores'].length;
        console.log(`${grade} Grade`);
        console.log(`List of students: ${sortedInformation[grade]['students'].join(', ')}`);
        console.log(`Average annual score from last year: ${totalScore.toFixed(2)}`)
        console.log()
    }
}

solve([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
    )