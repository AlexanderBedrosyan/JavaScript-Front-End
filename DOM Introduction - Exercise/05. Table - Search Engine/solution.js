function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let selectedClasses = Array.from(document.querySelectorAll('.select'));
      selectedClasses.forEach(element => element.classList.remove('select'))
      let neededText = document.querySelector('#searchField');
      let tableRows = Array.from(document.querySelectorAll('tbody > tr'));
      tableRows.forEach(element => {
         Array.from(element.children).forEach(tdEl => {
            if (tdEl.textContent.toLowerCase().includes(neededText.value.toLowerCase())){
               element.classList.add('select');
            }
         })
      });
      neededText.value = '';
   }
}