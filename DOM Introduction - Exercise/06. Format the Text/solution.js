function solve() {
  let textElement = document.querySelector('#input').value;
  let arrayElements = textElement.split('.').map(a => {if (a.length >= 1) return a});
  let result = document.querySelector('#output');
  let sentence = '';
  console.log(arrayElements)
  for (let i = 1; i !== arrayElements.length; i ++){
    sentence += arrayElements[i - 1] + '.';
    if (i % 3 === 0){
      let paragraph = document.createElement('p');
      paragraph.textContent = sentence;
      result.appendChild(paragraph);
      sentence = '';
    }
  }
  if (sentence.length > 3) {
    let paragraph = document.createElement('p');
    paragraph.textContent = sentence
    result.appendChild(paragraph)
  }
}