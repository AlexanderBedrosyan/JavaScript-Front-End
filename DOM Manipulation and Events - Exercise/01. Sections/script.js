function create(words) {
   let startingDiv = document.querySelector('#content')
   words.forEach(element => {
      let p = document.createElement('p');
      p.textContent = element;
      p.style.display = 'none'

      let div = document.createElement('div');
      div.appendChild(p);
      div.addEventListener('click', () => p.style.display = 'block')
      startingDiv.appendChild(div)
   });
}