// Finding the element
var lotElements = Array.prototype.slice.call(document.querySelectorAll('lot'));

console.log(lotElements); // NodeList

lotElements.map(function(lotElement, i){
  // Add event listener
  lotElement.addEventListener('click', function(e) {

    // Event delegation
    console.log('someone clicked on the lot'); // always gets printed

    if(e.target && e.target.matches('button.buy')) {
      if (i===0) { // Main lot
        buyConsumer(e.target);
      } else if (i===1) { // Commercial
        buyCommercial(e.target);
      }
    }
  });
});

function buyConsumer(el) {
  disableElement(el);
  var price = parseInt(el.parentElement.children[2].innerText, 10);
  addToCart(price * 0.8);
}

function buyCommercial(el) {
  disableElement(el);
  addToCart(el.parentElement.children[2].innerText);
}

function disableElement(el) {
  el.disabled = true;
}

function addToCart(str) {
  var cart = document.querySelector('cart');
  var items = cart.querySelector('items');
  var newItem = document.createElement('item');
  var newItemContent = document.createTextNode(str);
  newItem.appendChild(newItemContent);
  items.appendChild(newItem);



  //items.innerHTML += '<item>' + str + '</item>'; // not really safe
}

































// // Get the parent DIV, add click listener...
// document.querySelector('lot').addEventListener("click",function(e) {
// 	// e.target was the clicked element
//   if (e.target && e.target.matches("button.buy")) {
//     console.log("Anchor element clicked!");
// 	}
// });