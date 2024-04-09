function attachEvents() {
  const url = `http://localhost:3030/jsonstore/collections/students`;
  const tableBody = document.querySelector('#results > tbody');
  const button = document.querySelector('#submit');
  button.addEventListener('click', createStudent);

  fetch(url)
    .then(response => response.json())
    .then(data => {
      Object.values(data)
        .forEach(element => {
          let tr = document.createElement('tr')
          let firstName = document.createElement('th');
          firstName.textContent = element.firstName;
          let lastName = document.createElement('th');
          lastName.textContent = element.lastName;
          let facultyNumber = document.createElement('th');
          facultyNumber.textContent = element.facultyNumber;
          let grade = document.createElement('th');
          grade.textContent = element.grade;
          tr.appendChild(firstName);
          tr.appendChild(lastName);
          tr.appendChild(facultyNumber);
          tr.appendChild(grade);
          tableBody.appendChild(tr)
        })
    });
  
    function createStudent(){
      let [firstName, lastName, facultyNumber, grade] = document.querySelectorAll('input[type=text]');
      console.log(firstName)
      let info = {
        "firstName": firstName.value,
        "lastName": lastName.value,
        "facultyNumber": facultyNumber.value,
        "grade": grade.value
      }
      fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(info)
      })
    }
}

attachEvents();