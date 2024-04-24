function solve(){
    let url = 'http://localhost:3030/jsonstore/grocery/';
    let loadBtn = document.querySelector('#load-product');
    let updateBtn = document.querySelector('#update-product');
    let addBtn = document.querySelector('#add-product');
    let product = document.querySelector('#product');
    let count = document.querySelector('#count');
    let price = document.querySelector('#price');
    let tbody = document.querySelector('#tbody');

    loadBtn.addEventListener('click', function(event) {
        event.preventDefault()
        loadAllProducts();
    })

    addBtn.addEventListener('click', function(event){
        event.preventDefault()
        let info = {
            "product": product.value,
            "count": count.value,
            "price": price.value
        }

        fetch(url, {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(info)
        })
        .then(() => {
            product.value = '';
            price.value = '';
            count.value = '';
            loadAllProducts();
        })
    })

    function loadAllProducts(){
        tbody.innerHTML = '';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            let details = Object.values(data);
            details.forEach(element => {
                let tr = document.createElement('tr');
                let tdName = document.createElement('td');
                tdName.classList.add('name');
                tdName.textContent = element.product
                let countProduct = document.createElement('td');
                countProduct.classList.add('count-product');
                countProduct.textContent = element.count
                let productPrice = document.createElement('td');
                productPrice.classList.add('product-price')
                productPrice.textContent = element.price;
                let buttonsContainer = document.createElement('td');
                buttonsContainer.classList.add('btn');

                let update = document.createElement('button');
                update.classList.add('update');
                update.textContent = 'Update';
                let deleteBtn = document.createElement('button');
                deleteBtn.classList.add('delete');
                deleteBtn.textContent = 'Delete'
                buttonsContainer.appendChild(update)
                buttonsContainer.appendChild(deleteBtn)

                tr.appendChild(tdName)
                tr.appendChild(countProduct)
                tr.appendChild(productPrice)
                tr.appendChild(buttonsContainer)
                tbody.appendChild(tr)

                deleteBtn.addEventListener('click', function(event) {
                    fetch(url + element._id, {
                        method: "DELETE",
                        headers: {"content-type": "application/json"}
                    })
                    .then(() => loadAllProducts())
                })

                update.addEventListener('click', function() {
                    product.value = element.product;
                    count.value = element.count;
                    price.value = element.price;
                    updateBtn.disabled = false;
                    addBtn.disabled = true;

                    updateBtn.addEventListener('click', function(event) {
                        event.preventDefault()
                        let newInfo = {
                            "product": product.value,
                            "count": count.value,
                            "price": price.value
                        }
                        fetch(url + element._id, {
                            method: "PATCH",
                            headers: {"content-type": "application/json"},
                            body: JSON.stringify(newInfo)
                        })
                        .then(() => {
                            product.value = '';
                            count.value = '';
                            price.value = '';
                            updateBtn.disabled = true;
                            addBtn.disabled = false;
                            loadAllProducts();
                        })
                    })
                })
            })
        })
    };
}

solve();