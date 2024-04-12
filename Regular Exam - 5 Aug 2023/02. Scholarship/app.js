window.addEventListener("load", solve);

function solve() {
    let student = document.querySelector('#student');
    let university = document.querySelector('#university');
    let score = document.querySelector('#score');
    let nextBtn = document.querySelector('#next-btn');
    let previewList = document.querySelector('#preview-list');
    let candidates = document.querySelector('#candidates-list')

    nextBtn.addEventListener('click', function() {
      if (inputsChecker()){
        return
      }

      let application = document.createElement('li')
      application.classList.add('application');

      let article = document.createElement('article');

      let h4name = document.createElement('h4')
      h4name.textContent = student.value;

      let pUniversity = document.createElement('p')
      pUniversity.textContent = `University: ${university.value}`;

      let pScore = document.createElement('p')
      pScore.textContent = `Score: ${score.value}`

      article.appendChild(h4name);
      article.appendChild(pUniversity);
      article.appendChild(pScore);
      application.appendChild(article);

      let editBtn = document.createElement('button');
      editBtn.classList.add('action-btn');
      editBtn.classList.add('edit');
      editBtn.textContent = 'edit';

      let applyBtn = document.createElement('button');
      applyBtn.classList.add('action-btn');
      applyBtn.classList.add('apply');
      applyBtn.textContent = 'apply';

      application.appendChild(editBtn);
      application.appendChild(applyBtn);

      previewList.appendChild(application);

      nextBtn.disabled = true;
      clearInputs()

      editBtn.addEventListener('click', function() {
        student.value = h4name.textContent;
        university.value = pUniversity.textContent.split(': ')[1];
        score.value = pScore.textContent.split(': ')[1];

        application.remove();
        nextBtn.disabled = false;
      })

      applyBtn.addEventListener('click', function() {
        editBtn.remove()
        applyBtn.remove()
        let copyElement = application.cloneNode(true);
        application.remove()
        nextBtn.disabled = false;
        candidates.appendChild(copyElement);
      })
    })

    function inputsChecker() {
      return student.value.trim() === '' || university.value.trim() === '' || score.value.trim() === '';
    }

    function clearInputs() {
      student.value = '';
      university.value = '';
      score.value = '';
    }
}


// function createApplication (studentName, university, score) {
//   const application = document.createElement('li');
//   application.classList.add('application');

//   application.innerHTML = `
//   <article>
//       <h4>${studentName}</h4>
//       <p>University: ${university}</p>
//       <p>Score: ${score}</p>
//   </article>
//   `;

  