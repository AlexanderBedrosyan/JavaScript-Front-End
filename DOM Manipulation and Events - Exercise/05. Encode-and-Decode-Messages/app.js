function encodeAndDecodeMessages() {
    let encodeButton = document.querySelectorAll('#main > div > button')[0];
    let decodeButton = document.querySelectorAll('#main > div > button')[1];
    let writeMessageArea = document.querySelectorAll('#main > div > textarea')[0];
    let receivedMessageArea = document.querySelectorAll('#main > div > textarea')[1];
    encodeButton.addEventListener('click', function() {
        let newMessage = writeMessageArea.value.split('')
            .map(a => {let asciiNum = a.charCodeAt(0) + 1; return String.fromCharCode(asciiNum)})
            .join('');
        receivedMessageArea.value = newMessage;
        writeMessageArea.value = '';
    });
    decodeButton.addEventListener('click', function() {
        let newMessage = receivedMessageArea.value.split('')
        .map(a => {let asciiNum = a.charCodeAt(0) - 1; return String.fromCharCode(asciiNum)})
        .join('');
    receivedMessageArea.value = newMessage;
    })
}