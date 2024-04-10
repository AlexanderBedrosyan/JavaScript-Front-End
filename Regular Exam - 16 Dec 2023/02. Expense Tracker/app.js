window.addEventListener("load", solve);

function solve() {
    const previewTrackerUl = document.querySelector('#preview-list');
    const detailsForm = document.querySelector('.expense-content');
    const expensesUl = document.querySelector('#expenses-list')
    const inputs = Array.from(detailsForm.querySelectorAll('input'));
    const addButton = detailsForm.querySelector('button');
    const deleteButton = document.querySelector('.btn.delete');

    addButton.addEventListener('click', (e) => {
        if (inputs[0].value && inputs[1].value && inputs[2].value){
            let li = document.createElement('li');
            li.classList.add('expense-item');

            let article = document.createElement('article');

            let buttons = document.createElement('div');
            buttons.classList.add('buttons');
            let editBtn = document.createElement('button');
            editBtn.classList.add('btn');
            editBtn.classList.add('edit')
            editBtn.textContent = 'edit';
            let okBtn = document.createElement('button');
            okBtn.classList.add('btn');
            okBtn.classList.add('ok')
            okBtn.textContent = 'ok'

            let p1 = document.createElement('p');
            p1.textContent = `Type: ${inputs[0].value}`
            let p2 = document.createElement('p');
            p2.textContent = `Amount: ${inputs[1].value}$`
            let p3 = document.createElement('p');
            p3.textContent = `Date: ${inputs[2].value}`
            let arr = [p1, p2, p3]
            arr.forEach(element => {
                article.appendChild(element);
            });
            
            buttons.appendChild(editBtn);
            buttons.appendChild(okBtn)
            li.appendChild(article);
            li.appendChild(buttons);
            previewTrackerUl.appendChild(li)

            addButton.disabled = true;
            inputs[0].value = '';
            inputs[1].value = '';
            inputs[2].value = '';

            editBtn.addEventListener('click', (e) => {
                inputs[0].value = p1.textContent.replace('Type: ', '');
                inputs[1].value = Number(p2.textContent.replace('Amount: ', '').replace('$', ''));
                inputs[2].value = p3.textContent.replace('Date: ', '');
                li.remove();
                addButton.disabled = false;
            });

            okBtn.addEventListener('click', (e) => {
                buttons.remove()
                expensesUl.appendChild(li);
                while (previewTrackerUl.firstChild){
                    previewTrackerUl.remove(previewTrackerUl.firstChild);
                }
            })
        }
    })

    deleteButton.addEventListener('click', (e) => {
        let liExpenseUl = expensesUl.querySelector('.expense-item');
        if (liExpenseUl){
            liExpenseUl.remove();
        }

        let liPreviewTracker = previewTrackerUl.querySelector('.expense-item');
        if (liPreviewTracker){
            liPreviewTracker.remove();
        }
        inputs.forEach(element => element.value = '');
        addButton.disabled = false;
    })
};