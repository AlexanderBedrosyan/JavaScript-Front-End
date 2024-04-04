function attachEventsListeners() {
    let distanceMapper = {
        'km': (value) => value * 1000,
        'm': (value) => value * 1,
        'cm': (value) => value * 0.01,
        'mm': (value) => value * 0.001,
        'mi': (value) => value * 1609.34,
        'yrd': (value) => value * 0.9144,
        'ft': (value) => value * 0.3048,
        'in': (value) => value * 0.0254,
    };

    let metterConvertor = {
        'km': (value) => value / 1000,
        'm': (value) => value * 1,
        'cm': (value) => value * 100,
        'mm': (value) => value * 1000,
        'mi': (value) => value / 1609.34,
        'yrd': (value) => value / 0.9144,
        'ft': (value) => value / 0.3048,
        'in': (value) => value / 0.0254,
    }
    let button = document.querySelector('input[value=Convert]');
    button.addEventListener('click', function() {
        let fromNum = Number(document.querySelector('#inputDistance').value);
        let textSelect = document.querySelector('select[id=inputUnits]').value;
        let toTextSelect = document.querySelector('select[id=outputUnits]').value;
        let elementInMeters = distanceMapper[textSelect](fromNum);
        let convertElement = metterConvertor[toTextSelect](elementInMeters);
        let output = document.querySelector('input[id=outputDistance]');
        output.value = convertElement;
    })
}