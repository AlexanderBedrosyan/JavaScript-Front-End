function attachGradientEvents() {
    
    const element = document.getElementById('gradient');

    element.addEventListener('mousemove', onElement);
    element.addEventListener('mouseout', outElement);

    function onElement(event){
        const x = event.offsetX;
        const percent = Math.floor(x / 300 * 100);
        document.getElementById('result').textContent = percent + '%';
    }

    function outElement(){
        document.getElementById('result').textContent = '';
    }
}