window.addEventListener('load', solve);

function solve() {
    let genre = document.querySelector('#genre');
    let name = document.querySelector('#name');
    let author = document.querySelector('#author');
    let date = document.querySelector('#date');
    let addBtn = document.querySelector('#add-btn');
    let allHitsContainer = document.querySelector('.all-hits-container')
    let likes = document.querySelector('.likes > p');
    let savedContainer = document.querySelector('.saved-container');

    addBtn.addEventListener('click', function(event){
        event.preventDefault()
        if (genre.value === '' || name.value === '' || author.value === '' || date.value === '') {
            return
        }
        collectionOfSongs();
    })

    function clearForm(){
        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';
    }

    function collectionOfSongs(){
        let hitsInfo = document.createElement('div');
        hitsInfo.classList.add('hits-info')
        let img = document.createElement('img');
        img.src = './static/img/img.png';
        let genreH2 = document.createElement('h2')
        genreH2.textContent = `Genre: ${genre.value}`
        let nameH2 = document.createElement('h2')
        nameH2.textContent = `Name: ${name.value}`
        let authorH2 = document.createElement('h2')
        authorH2.textContent = `Author: ${author.value}`
        let dateH3 = document.createElement('h3')
        dateH3.textContent = `Date: ${date.value}`

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';
        let likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song'
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete'

        hitsInfo.appendChild(img)
        hitsInfo.appendChild(genreH2)
        hitsInfo.appendChild(nameH2)
        hitsInfo.appendChild(authorH2)
        hitsInfo.appendChild(dateH3)
        hitsInfo.appendChild(saveBtn)
        hitsInfo.appendChild(likeBtn)
        hitsInfo.appendChild(deleteBtn)
        allHitsContainer.appendChild(hitsInfo)
        clearForm();

        likeBtn.addEventListener('click', function() {
            let details = likes.textContent.split(': ');
            let totalCount = Number(details[1]) + 1
            likes.textContent = `${details[0]}: ${totalCount}`
            likeBtn.disabled = true;
        })

        saveBtn.addEventListener('click', function() {
            saveBtn.remove();
            likeBtn.remove();
            savedContainer.appendChild(hitsInfo);
        })

        deleteBtn.addEventListener('click', function() {
            hitsInfo.remove()
        })
    }
}