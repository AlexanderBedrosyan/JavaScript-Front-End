function solve(arr){
    let groceriesList = arr.shift().split('!');
    arr.pop();

    arr.forEach(element => {
        let details = element.split(' ');
        command = details.shift();
        if (command === "Urgent"){
            let item = details[0];
            if (!(groceriesList.includes(item))){
    
                groceriesList.unshift(item)
            }
        } else if (command === "Unnecessary"){
            let item = details[0];
            if (groceriesList.includes(item)){
                let ind = groceriesList.indexOf(item);
                groceriesList.splice(ind, 1)
            }
        } else if (command === "Correct") {
            let oldItem = details[0];
            let newItem = details[1];
            if (groceriesList.includes(oldItem)){
                let ind = groceriesList.indexOf(oldItem)
                groceriesList[ind] = newItem;
            }
        } else {
            let item = details[0];
            if (groceriesList.includes(item)){
                let ind = groceriesList.indexOf(item);
                groceriesList.splice(ind, 1);
                groceriesList.push(item)
            }
        }
    });
    console.log(groceriesList.join(', '))
}

solve(
    (["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

)