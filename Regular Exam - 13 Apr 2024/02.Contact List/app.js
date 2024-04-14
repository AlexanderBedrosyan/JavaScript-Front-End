window.addEventListener("load", solve);

function solve() {
    let name = document.querySelector('#name');
    let phoneNumber = document.querySelector('#phone');
    let category = document.querySelector('#category');
    let addBtn = document.querySelector('#add-btn');
    let list = document.querySelector('#check-list');
    let finalList = document.querySelector('#contact-list')

    addBtn.addEventListener('click', function() {
      if (isEmptyString()){
        return
      }

      let li = elementCreator('li', null, [], '');

      let article = elementCreator('article', null, [], '');
      let pName = elementCreator('p', null, [], `name:${name.value}`);
      let pPhone = elementCreator('p', null, [], `phone:${phoneNumber.value}`);
      let pCategory = elementCreator('p', null, [], `category:${category.value}`);
      article = addChilds(article, [pName, pPhone, pCategory]);
      li = addChilds(li, [article]);

      let container = elementCreator('div', null, ["buttons"], '');
      let editBtn = elementCreator('button', null, ["edit-btn"], '')
      let saveBtn = elementCreator('button', null, ["save-btn"], '')
      container = addChilds(container, [editBtn, saveBtn]);

      li = addChilds(li, [container]);
      list = addChilds(list, [li])

      changeInfoInputs('', '', '')

      editBtn.addEventListener('click', function() {
        changeInfoInputs(pName.textContent.split(':')[1], pPhone.textContent.split(':')[1], pCategory.textContent.split(':')[1])
        li.remove()
      })

      saveBtn.addEventListener('click', function() {
        container.remove();
        let deleteBtn = elementCreator('button', null, ["del-btn"], '')

        li = addChilds(li, [deleteBtn]);
        let cloneElement = li.cloneNode(true)
        finalList = addChilds(finalList, [cloneElement]);
        li.remove()

        let currentBtn = document.querySelector('.del-btn')
        currentBtn.addEventListener('click', function() {
          finalList.innerHTML = ''         
        })
      })

    })

    function isEmptyString(){
      return name.value.trim() === '' || phoneNumber.value.trim() === '' || category.value.trim() === '';
    }

    function changeInfoInputs(currName, currPhone, currCategory) {
      name.value = currName;
      phoneNumber.value = currPhone;
      category.value = currCategory;
    }

    function elementCreator(type, id, currentClass, content) {
      let newElement = document.createElement(type);
      if (id) {
          newElement.id = id
      }
      if (currentClass.length > 0){
          currentClass.forEach(element => {
              newElement.classList.add(element);
          });
      }
      newElement.textContent = content;
      return newElement
    }

    function addChilds(parent, listOfChilds){
      listOfChilds.forEach(element => parent.appendChild(element))
      return parent
    }
  }
  