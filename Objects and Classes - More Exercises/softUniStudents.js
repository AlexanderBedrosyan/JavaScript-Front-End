function solve(array){
    let courses = {};
    let studentsInCourses = {};
    let singleStudent = {};

    for (let element of array){
        if (element.includes(': ')){
            let [course, capacity] = element.split(': ');
            if (!(courses.hasOwnProperty(course))) {
                courses[course] = 0;
                studentsInCourses[course] = [];
            }
            courses[course] += Number(capacity)
        } else {
            let information = element.replace('with email', 'joins');
            let [studentInfo, email, courseName] = information.split(' joins ');
            let [name, infoCredits] = studentInfo.split('[')
            let credits = Number(infoCredits.split(']')[0])

            if (courses.hasOwnProperty(courseName) && courses[courseName] > 0) {
                courses[courseName] -= 1;
                studentsInCourses[courseName].push(name)
            }

            if (!(singleStudent.hasOwnProperty(name))){
                singleStudent[name] = {totalCredits: 0, email: ''};
                singleStudent[name]['totalCredits'] += credits;
            }
            singleStudent[name]['email'] = email;
        }
    }
    
    const sortedCourses = Object.entries(studentsInCourses)
                            .sort((a, b) => b[1].length - a[1].length)
    
    let sortedStudents = {};

    Object.entries(singleStudent)
        .sort((a, b) => b[1]['totalCredits'] - a[1]['totalCredits'])
        .forEach(element => {
            sortedStudents[element[0]] = element[1]
        })

    for (let element of sortedCourses){
        let course = element[0];
        let users = element[1];
        console.log(`${course}: ${courses[course]} places left`)
        for (const student in sortedStudents) {
            if (users.includes(student)){
                console.log(`--- ${sortedStudents[student]['totalCredits']}: ${student}, ${sortedStudents[student]['email']}`)
            }
        }
    }
}
