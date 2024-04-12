window.addEventListener("load", solve);

function solve() {
    let player = document.querySelector('#player');
    let score = document.querySelector('#score');
    let round = document.querySelector('#round');
    let ul = document.querySelector('#sure-list');
    let finalUl = document.querySelector('#scoreboard-list');
    let addBtn = document.querySelector('#add-btn');
    let clear = document.querySelector('.btn.clear');

    clear.addEventListener('click', function() {
      clearInputs();
      finalUl.innerHTML = '';
      ul.innerHTML = '';
      addBtn.disabled = false;
    })

    addBtn.addEventListener('click', function() {
      if (player.value === '' || score.value === '' || round.value === ''){
        return
      }
      addBtn.disabled = true;

      let li = document.createElement('li');
      li.classList.add('dart-item');
      let article = document.createElement('article');
      let name = document.createElement('p');
      name.textContent = player.value;
      let pScore = document.createElement('p');
      pScore.textContent = `Score: ${score.value}`;
      let pRound = document.createElement('p');
      pRound.textContent = `Round: ${round.value}`;
      article.appendChild(name);
      article.appendChild(pScore);
      article.appendChild(pRound);

      let editBtn = document.createElement('button');
      editBtn.classList.add('btn');
      editBtn.classList.add('edit');
      editBtn.textContent = 'edit';
      let okBtn = document.createElement('button');
      okBtn.classList.add('btn')
      okBtn.classList.add('ok')
      okBtn.textContent = 'ok'

      li.appendChild(article);
      li.appendChild(editBtn)
      li.appendChild(okBtn)
      ul.appendChild(li)
      clearInputs();

      editBtn.addEventListener('click', function() {
        addBtn.disabled = false;
        player.value = name.textContent;
        score.value = pScore.textContent.split(': ')[1];
        round.value = pRound.textContent.split(': ')[1];
        li.remove()
      })

      okBtn.addEventListener('click', function() {
        okBtn.remove();
        editBtn.remove();
        let copiedElement = li.cloneNode(true);
        finalUl.appendChild(copiedElement);
        li.remove()
        addBtn.disabled = false;       
      })
    })

    function clearInputs() {
      player.value = '';
      score.value = '';
      round.value = '';
    }
  }
  