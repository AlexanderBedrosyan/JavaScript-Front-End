function solve(array){
    let shelves = {};
    let infoShelves = {};

    for (const iterator of array) {
        if (iterator.includes('->')){
            let [id, genre] = iterator.split(' -> ');
            if (!(shelves.hasOwnProperty(id))){
                shelves[id] = genre;
                infoShelves[id] = {};
            }
        } else {
            let information = iterator.replace(':', ',');
            let [title, author, genre] = information.split(', ');
            for (const key in shelves) {
                if (shelves[key] === genre){
                    infoShelves[key][title] = author
                }
            }
        }
    }

    
    let sortedShelves = Object.entries(infoShelves)
        .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length)
        .map(element => [element[0], element[1]]);

    for (const shelf of sortedShelves) {
        console.log(`${shelf[0]} ${shelves[shelf[0]]}: ${Object.keys(shelf[1]).length}`);
        let books = {};

        Object.keys(shelf[1])
            .sort((a, b) => a.localeCompare(b))
            .forEach(key => {
                books[key] = shelf[1][key]
            })

        for (const key in books){
            console.log(`--> ${key}: ${books[key]}`)
        }
    }
}

solve(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])