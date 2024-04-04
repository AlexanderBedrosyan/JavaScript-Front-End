function solve() {

  const table = document.querySelector('.table tbody');

  const buttons = Array.from(document.querySelectorAll('#exercise button'));
  const input = Array.from(document.querySelectorAll('#exercise textarea'));

  const generate = buttons[0];
  const buy = buttons[1];
  
  const firstArea = input[0];
  const secondArea = input[1];  

  generate.addEventListener('click', generator);
  buy.addEventListener('click', buyer);

  function generator(){
    
    let json = JSON.parse(firstArea.value);

    for (const element of json) {

        const tr1 = document.createElement('tr');
        const td1 = document.createElement('td');
        const img = document.createElement('img');
        img.src = element.img;
        td1.appendChild(img);
        tr1.appendChild(td1);

        const td2 = document.createElement('td');
        const p1 = document.createElement('p');
        p1.textContent = element.name;
        td2.appendChild(p1);
        tr1.appendChild(td2);

        const td3 = document.createElement('td');
        const p2 = document.createElement('p');
        p2.textContent = Number(element.price);
        td3.appendChild(p2);
        tr1.appendChild(td3);

        const td4 = document.createElement('td');
        const p3 = document.createElement('p');
        p3.textContent = Number(element.decFactor);
        td4.appendChild(p3);
        tr1.appendChild(td4);

        const td5 = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'checkbox';
        td5.appendChild(input);
        tr1.appendChild(td5);

        table.appendChild(tr1);

    }    

  }

  function buyer(){
    const checkedCheckbox = Array.from(document.querySelectorAll('input[type="checkbox"]'))
    .filter((box) => box.checked);

      let furniture = [];
      let price = 0;
      let decorationFactorAll = 0;

    for (const ch of checkedCheckbox) {
      const parent = ch.parentElement.parentElement; 
      const pElements = Array.from(parent.querySelectorAll('p'));

      let name = pElements[0].textContent;
      let crrPrice = Number(pElements[1].textContent);
      let decorationFactor = Number(pElements[2].textContent);
      furniture.push(name);
      price += crrPrice;
      decorationFactorAll += decorationFactor;

    }

    secondArea.value = `Bought furniture: ${furniture.join(', ')}\nTotal price: ${price.toFixed(2)}\nAverage decoration factor: ${decorationFactorAll/furniture.length}`;
    

  }

  secondArea.value = '';
}