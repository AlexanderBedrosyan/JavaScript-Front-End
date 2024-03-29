function search() {
   let cities = Array.from(document.querySelectorAll('#towns > li'));
   let neededElement = document.querySelector('#searchText').value;
   let result = document.getElementById('result');
   let matches = 0;
   cities.forEach(element => {
      if (element.textContent.toLowerCase().includes(neededElement.toLowerCase())){
         matches += 1;
         element.style.textDecoration = 'underline';
         element.style.fontWeight = 'bold'
      }
   })
   result.textContent = `${matches} matches found`
}
