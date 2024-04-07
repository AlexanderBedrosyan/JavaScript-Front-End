function getInfo() {
    const url = 'http://localhost:3030/jsonstore/bus/businfo/';
    let id = document.querySelector('#stopId');
    let stopName = document.querySelector('#stopName');
    fetch(`${url}${id.value}`)
        .then(response => response.json())
        .then(data =>
            showBuses(data)
        )

        .catch(function(err) {
            stopName.textContent = 'Error';
        });

    function showBuses(data){
        stopName.textContent = data['name'];
        let ulBuses = document.querySelector('#buses');
        let buses = data['buses'];
        for (const bus in buses) {
            let li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
            ulBuses.appendChild(li);
        }
    }
}
