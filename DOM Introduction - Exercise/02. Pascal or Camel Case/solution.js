function solve() {
  let namingConvention = document.querySelector('#naming-convention').value;
  let text = document.querySelector('input[type=text]').value.split(' ');
  let result = document.querySelector('#result');

  if (namingConvention !== 'Pascal Case' && namingConvention !== 'Camel Case'){
    result.textContent = 'Error!';
    return
  }
  
  switch (namingConvention) {
    case 'Pascal Case':
      let pascalResult = text.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
      result.textContent = pascalResult.join('');
      break;
    case 'Camel Case':
      let finalResult = [];
      if (text.length === 1){
        finalResult.push(text[0].toLowerCase())
      } else {
        finalResult.push(text[0].toLowerCase())
        for (let i = 1; i < text.length; i ++) {
          let word = text[i].charAt(0).toUpperCase() + text[i].slice(1).toLowerCase();
          finalResult.push(word);
        }
      }
      result.textContent = finalResult.join('');
      break;
  }
}