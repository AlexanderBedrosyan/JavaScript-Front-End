window.addEventListener("load", solve);

function solve() {
  let firstName = document.querySelector("#first-name");
  let lastName = document.querySelector("#last-name");
  let age = document.querySelector("#age");
  let storyTitle = document.querySelector("#story-title");
  let story = document.querySelector('#story');
  let publishBtn = document.querySelector("#form-btn");
  let previewList = document.querySelector("#preview-list")
  let mainDiv = document.querySelector('#main')

  publishBtn.addEventListener('click', function() {
      if (firstName.value.trim() === '' || lastName.value.trim() === '' || age.value.trim() === '' || storyTitle.value.trim() === '' || story.value.trim() === '') {
        return
      }
      let genre = document.querySelector("#genre");
      let ind = genre.selectedIndex;
      let option = genre.options[ind];

      let liStoryInfo = document.createElement('li');
      liStoryInfo.classList.add('story-info');
      let article = document.createElement('article');
      let h4name = document.createElement('h4');
      h4name.textContent = `Name: ${firstName.value} ${lastName.value}`
      let pAge = document.createElement('p');
      pAge.textContent = `Age: ${age.value}`;
      let pTitle = document.createElement('p');
      pTitle.textContent = `Title: ${storyTitle.value}`;
      let pGenre = document.createElement('p');
      pGenre.textContent = `Genre: ${option.value}`;
      let pStory = document.createElement('p');
      pStory.textContent = story.value;
      
      let saveBtn = document.createElement('button');
      saveBtn.classList.add('save-btn');
      saveBtn.textContent = 'Save Story'
      saveBtn.disabled = false;
      let editBtn = document.createElement('button');
      editBtn.classList.add('edit-btn');
      editBtn.textContent = 'Edit Story'
      editBtn.disabled = false;
      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.textContent = 'Delete Story'
      deleteBtn.disabled = false;

      article.appendChild(h4name)
      article.appendChild(pAge)
      article.appendChild(pTitle)
      article.appendChild(pGenre)
      article.appendChild(pStory)
      liStoryInfo.appendChild(article)
      liStoryInfo.appendChild(saveBtn)
      liStoryInfo.appendChild(editBtn)
      liStoryInfo.appendChild(deleteBtn)
      previewList.appendChild(liStoryInfo)
      publishBtn.disabled = true;
      clearForm()

      editBtn.addEventListener('click', function() {
        let details = h4name.textContent.split(' ')
        firstName.value = details[1];
        lastName.value = details[2];
        age.value = pAge.textContent.split(' ')[1];
        story.value = pStory.textContent;
        storyTitle.value = pTitle.textContent.split(': ')[1];
        liStoryInfo.remove()
        publishBtn.disabled = false;
      })

      saveBtn.addEventListener('click', function() {
        while (mainDiv.firstChild){
          mainDiv.removeChild(mainDiv.firstChild)
        }
        let h1 = document.createElement('h1');
        h1.textContent = "Your scary story is saved!";
        mainDiv.appendChild(h1)
      })

      deleteBtn.addEventListener('click', function() {
        liStoryInfo.remove();
        publishBtn.disabled = false;
      })
  });

  function clearForm(){
    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    story.value = '';
  }
}
