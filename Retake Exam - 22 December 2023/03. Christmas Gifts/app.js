function solve(){
    let url = 'http://localhost:3030/jsonstore/gifts/';
    let giftList = document.querySelector('#gift-list');
    let loadBtn = document.querySelector('#load-presents');
    let addBtn = document.querySelector('#add-present');
    let editBtn = document.querySelector('#edit-present');
    let giftInput = document.querySelector('#gift');
    let forInput = document.querySelector('#for');
    let priceInput = document.querySelector('#price');

    loadBtn.addEventListener('click', loadData)
    addBtn.addEventListener('click', function(){
        fetch(url, {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                "gift": giftInput.value,
                "for": forInput.value,
                "price": priceInput.value
            })
        })
        .then(() => loadData())
        .then(() => clearForm())
    })

    function clearForm() {
        giftInput.value = "";
        priceInput.value = "";
        forInput.value = "";
      }
    
    function loadData() {
        giftList.innerHTML = '';
        editBtn.disabled = true;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            let information = Object.entries(data);
            for (const [key, iterator] of information) {
                let sockGift = document.createElement('div');
                sockGift.classList.add('gift-sock');
                let content = document.createElement('div');
                content.classList.add('content');
                let pGift = document.createElement('p');
                pGift.textContent = iterator.gift;
                let pFor = document.createElement('p');
                pFor.textContent = iterator.for;
                let pPrice = document.createElement('p');
                pPrice.textContent = iterator.price;
                content.appendChild(pGift);
                content.appendChild(pFor);
                content.appendChild(pPrice);
                sockGift.appendChild(content)

                let buttonCotainers = document.createElement('buttons-container');
                buttonCotainers.classList.add('buttons-container');
                let changeBtn = document.createElement('button');
                changeBtn.classList.add('change-btn');
                changeBtn.textContent = 'Change';
                let deleteBtn = document.createElement('button');
                deleteBtn.classList.add('delete-btn');
                deleteBtn.textContent = 'Delete';
                buttonCotainers.appendChild(changeBtn);
                buttonCotainers.appendChild(deleteBtn);
                sockGift.appendChild(buttonCotainers);

                giftList.appendChild(sockGift);

                deleteBtn.addEventListener('click', function() {
                    fetch(url + iterator._id, {
                        method: "DELETE",
                        headers: {'content-type': 'application/json'},
                    })
                    .then(() => loadData());
                })

                changeBtn.addEventListener('click', function(){
                    addBtn.disabled = true;
                    editBtn.disabled = false;
                    giftInput.value = pGift.textContent;
                    priceInput.value = pPrice.textContent;
                    forInput.value = pFor.textContent;
                    sockGift.remove();
                    
                    editBtn.addEventListener('click', function() {
                        fetch(url + iterator._id, {
                            method: "PUT",
                            headers: {'content-type': 'application/json'},
                            body: JSON.stringify({
                                "gift": giftInput.value,
                                "for": forInput.value,
                                "price": priceInput.value})
                            })
                            .then(() => loadData())
                            .then(() => {
                            editBtn.disabled = true;
                            addBtn.disabled = false;
                            clearForm()})
                    })
                })
            }
        });
    }
}

solve();