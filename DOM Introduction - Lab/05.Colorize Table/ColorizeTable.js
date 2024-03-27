function colorize() {
    let information = Array.from(document.querySelectorAll('table tr'))
    for (let i = 0; i < information.length; i ++){
        if (i % 2 != 0){
            information[i].style.backgroundColor = 'Teal'
        }
    }
}