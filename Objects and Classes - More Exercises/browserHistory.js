function solve(obj, arrayStr){
    arrayStr.forEach(element => {
        if (element === 'Clear History and Cache'){
            obj['Open Tabs'] = [];
            obj['Recently Closed'] = [];
            obj['Browser Logs'] = [];
        } else {
            let [command, website] = element.split(' ');
            if (command === 'Open') {
                obj['Open Tabs'].push(website);
                obj['Browser Logs'].push(element)
            } else {
                if (obj['Open Tabs'].includes(website)){
                    while (obj['Open Tabs'].includes(website)){
                        let ind = obj['Open Tabs'].indexOf(website)
                        obj['Open Tabs'].splice(ind, 1);
                    }
                    obj['Browser Logs'].push(element);
                    obj['Recently Closed'].push(website);
                }
            }
        }
    });

    console.log(`${obj['Browser Name']}`)
    console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`)
    console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`)
    console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`)
}

// solve({
//     "Browser Name":"Google Chrome",
//     "Open Tabs":["Facebook","YouTube","Google Translate"],
//     "Recently Closed":["Yahoo","Gmail"],
//     "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]
// },
// ["Close Facebook", "Open StackOverFlow", "Open Google"]
// )

solve({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)