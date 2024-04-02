function attachEventsListeners() {
    let allElements = Array.from(document.querySelectorAll('div'));
    let convertMapperToSeconds = {
        'days': (value) => value * 86400,
        'hours': (value) => value * 3600,
        'minutes': (value) => value * 60,
        'seconds': (value) => value * 1,
    }

    let correctTime = {
        'days': (value) => value / 86400,
        'hours': (value) => value / 3600,
        'minutes': (value) => value / 60,
        'seconds': (value) => value / 1,
    }
    
    allElements.forEach(element => {
        let currentButton = element.querySelector('input[type=button]');
        currentButton.addEventListener('click', function() {
            generateResuts(element)
        });
    })

    function generateResuts(element) {
        let result = Number(element.querySelector('input[type=text]').value)
        let info = element.querySelector('input[type=text]').id;
        let seconds = convertMapperToSeconds[info](result);
        allElements.forEach(element => {
            let placeHolder = element.querySelector('input[type=text]');
            let numbers = correctTime[placeHolder.id](seconds);
            placeHolder.value = numbers
        })
    }
}