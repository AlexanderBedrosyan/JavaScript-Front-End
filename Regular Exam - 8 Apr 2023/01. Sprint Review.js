function solve(arr){
    let sprintReview = {}
    let n = arr.shift();
    while (n > 0) {
        n -= 1;
        let line = arr.shift();
        let [assignee, taskId, title, status, estimatePoints] = line.split(":");
        if (!(sprintReview.hasOwnProperty(assignee))){
            sprintReview[assignee] = {};
        }
        sprintReview[assignee][taskId] = {}
        sprintReview[assignee][taskId]["title"] = title
        sprintReview[assignee][taskId]["status"] = status
        sprintReview[assignee][taskId]["estimatePoints"] = Number(estimatePoints);
    }

    while (arr.length > 0) {
        let line = arr.shift().split(':');
        let command = line.shift();

        if (command === "Add New") {
            let assignee = line[0];
            let taskId = line[1];
            let title = line[2];
            let status = line[3];
            let estimatePoints = line[4];
            if (sprintReview.hasOwnProperty(assignee)){
                sprintReview[assignee][taskId] = {}
                sprintReview[assignee][taskId]["title"] = title;
                sprintReview[assignee][taskId]["status"] = status;
                sprintReview[assignee][taskId]["estimatePoints"] = Number(estimatePoints);
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`)
            }
        } else if (command === "Change Status"){
            let assignee = line[0];
            let taskId = line[1];
            let newStatus = line[2];
            if (!(sprintReview.hasOwnProperty(assignee))) {
                console.log(`Assignee ${assignee} does not exist on the board!`)
            } else {
                if (!(sprintReview[assignee].hasOwnProperty(taskId))) {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
                } else {
                    sprintReview[assignee][taskId]["status"] = newStatus;
                }
            }
        } else {
            let assignee = line[0];
            let index = Number(line[1]);
            if (sprintReview.hasOwnProperty(assignee)) {
                let allTasks = Object.keys(sprintReview[assignee])
                let neededTask = ''
                if (index < 0 || index > allTasks.length - 1) {
                    console.log(`Index is out of range!`)
                } else {
                    neededTask = allTasks[index];
                }

                delete sprintReview[assignee][neededTask];
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`)
            }
        }
    }
    
    let toDo = 0;
    let inProgress = 0;
    let codeReview = 0;
    let donePoints = 0;

    for (const assignee in sprintReview) {
        for (const taskId in sprintReview[assignee]) {
            let status =  sprintReview[assignee][taskId]["status"];
            let points =  sprintReview[assignee][taskId]["estimatePoints"];
            if (status === "ToDo"){
                toDo += points
            } else if (status === "In Progress") {
                inProgress += points
            } else if (status === "Code Review"){
                codeReview += points
            } else {
                donePoints += points
            }
        }
    }

    console.log(`ToDo: ${toDo}pts`)
    console.log(`In Progress: ${inProgress}pts`)
    console.log(`Code Review: ${codeReview}pts`)
    console.log(`Done Points: ${donePoints}pts`)

    if (donePoints >= (toDo + inProgress + codeReview)){
        console.log(`Sprint was successful!`)
    } else {
        console.log(`Sprint was unsuccessful...`)
    }
}

solve([
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]

)