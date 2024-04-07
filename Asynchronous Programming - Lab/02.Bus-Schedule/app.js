function solve() {
    const infoElement = document.querySelector('span[class=info]');
    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');
    let id = 'depot';
    let nextStop = ""
    url = "http://localhost:3030/jsonstore/bus/schedule/"
    function depart() {
        fetch(url + id)
            .then(respeonse => respeonse.json())
            .then(data => {
                console.log(data)
                id = data.next;
                nextStop = data.name;

                infoElement.textContent = `Next stop ${data.name}`;
            })
            .catch(err => console.log(err))
        
        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    async function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        infoElement.textContent = `Arriving at ${nextStop}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();