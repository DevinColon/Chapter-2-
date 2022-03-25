var subtotal = (13 + 1) * 5;
var shipping = 0.5 * (13 + 1);

var total = subtotal + shipping;

var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.gelElementByid('shipping');
elShip.textContent = shipping;

var elTotal = document.gelElementById('total');
elTotal.textContent = total;