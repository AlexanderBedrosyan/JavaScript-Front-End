function attachEvents() {
    const postUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
    const loadPostsBtn = document.querySelector('#btnLoadPosts');
    const viewBtn = document.querySelector('#btnViewPost');
    const allPosts = document.querySelector('#posts');
    const postTitle = document.querySelector('#post-title');
    const bodyPost = document.querySelector('#post-body');
    const postComments = document.querySelector('#post-comments');
    const infoPerValue = {}

    loadPostsBtn.addEventListener('click', function() {
        while (allPosts.firstChild){
            allPosts.removeChild(allPosts.firstChild);
        }

        fetch(postUrl)
            .then(response => response.json())
            .then(posts => {
                let objectNeeded = Object.values(posts);
                objectNeeded.forEach(element => {
                    let optionElements = document.createElement('option');
                    optionElements.textContent = element.title;
                    optionElements.value = element.id;
                    allPosts.appendChild(optionElements);
                    infoPerValue[element.id] = element.body;
                });
            })
    });

    viewBtn.addEventListener('click', function(){
        let ind = allPosts.selectedIndex;
        let selectedOption = allPosts.options[ind];
        let valueNeeded = selectedOption.value;
        postTitle.textContent = selectedOption.textContent;
        while (postComments.firstChild){
            postComments.removeChild(postComments.firstChild)
        }

        console.log(postComments)
        
        fetch(commentsUrl)
            .then(response => response.json())
            .then(data => {
                const details = Object.values(data);
                bodyPost.textContent = infoPerValue[valueNeeded];
                details
                    .filter(element => {
                        if (element.postId === valueNeeded){
                            return element
                        }
                    })
                    .forEach(element => {
                    let li = document.createElement('li');
                    li.textContent = element.text;
                    postComments.appendChild(li)
                }
                )
            })
    });

}

attachEvents();