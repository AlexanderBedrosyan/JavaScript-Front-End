function attachEvents() {
    const url = `http://localhost:3030/jsonstore/messenger`;
    const author = document.querySelector('input[name=author]');
    const text = document.querySelector('input[name=content]');
    const send = document.getElementById('submit');
    const refresh = document.getElementById('refresh');
    const textArea = document.querySelector('#messages')

    send.addEventListener('click', function() {
        const message = {
            "author": author.value,
            "content": text.value
        }
        fetch(url, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(message)
        })
    })

    refresh.addEventListener('click', function() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let allLines = []
                const information = Object.values(data);
                information.forEach(element => {
                    allLines.push(`${element.author}: ${element.content}`)
                })
                textArea.textContent = allLines.join('\n')
            })
    })
}

attachEvents();