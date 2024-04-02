function solve() {
   let shoppingCartInformation = {};
   let textAreaContent = [];
   let addButtons = Array.from(document.querySelectorAll('.add-product'));
   let finalInfoArray = document.querySelector('textarea');
   let checkout = document.querySelector('.checkout');

   checkout.addEventListener('click', showResult);
   addButtons.forEach(element => {
      element.addEventListener('click', addProduct);
   })

   function addProduct(event) {
      let currentElement = event.target.parentNode.parentNode;
      let productName = currentElement.querySelector('.product-title').textContent;
      let price = Number(currentElement.querySelector('.product-line-price').textContent);
      if (!(productName in shoppingCartInformation)){
         shoppingCartInformation[productName] = 0;
      }
      shoppingCartInformation[productName] += price;
      textAreaContent.push(`Added ${productName} for ${price.toFixed(2)} to the cart.`);
      finalInfoArray.value = textAreaContent.join('\n');
   }

   function showResult(event) {
      let allProducts = Object.keys(shoppingCartInformation);
      let prices = Object.values(shoppingCartInformation);
      let totalPrice = prices.reduce((a, b) => a + b, 0);
      textAreaContent.push(`You bought ${allProducts.join(', ')} for ${totalPrice.toFixed(2)}.`)
      finalInfoArray.value = textAreaContent.join('\n');
      addButtons.forEach(button => button.disabled = true);
      checkout.disabled = true;
   }
}