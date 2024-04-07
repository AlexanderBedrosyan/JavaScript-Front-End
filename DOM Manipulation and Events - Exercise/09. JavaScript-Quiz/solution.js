function solve() {
  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let section = Array.from(document.querySelectorAll('section'));
  let answers = [];
  let counter = 0;
  section.forEach(element => 
    Array.from(element.querySelectorAll('.answer-text'))
    .forEach(paragraph => paragraph.addEventListener('click', function() {
      if (correctAnswers.includes(paragraph.textContent)){
        answers.push(paragraph.textContent)
      }
      section[counter].style.display = 'none';
      if (counter + 1 < section.length){
        section[counter + 1].style.display = 'block';
      } else {
        let finalElement = document.querySelector('.results-inner h1');
        if (answers.length === 3){
          finalElement.textContent = "You are recognized as top JavaScript fan!"
          document.querySelector('#results').style.display = 'block'
        } else {
          finalElement.textContent = `You have ${answers.length} right answers`
          document.querySelector('#results').style.display = 'block'
        }
      }
      counter += 1;
    })));
}
