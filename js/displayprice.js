// Function for adding prices
function priceAdd(price) {
  const priceAdd = document.getElementById("Total-price");
  const prices = parseFloat(priceAdd.innerText);
  const priceNow = price;
  priceAdd.innerText = prices + priceNow;
  const totalPriceTag = document.getElementById("Total-price-now");
  totalPriceTag.innerText = priceAdd.innerText;
  totalPrice = priceAdd.innerText;
  whenActivate();
  return priceAdd.innerText;
}

// Items function
function items(name) {
  const addItem = document.getElementById("items-name");
  const count = addItem.childElementCount;
  const h4 = document.createElement("h4");
  h4.classList.add("my-6");
  h4.innerHTML = `${count}. ${name}`;
  addItem.appendChild(h4);
}
// coupons,applybutton and pay button
const coupon = document.getElementById("coupon");
const activateButton = document.getElementById("Apply");
const payBtn = document.getElementById("pay");

var totalPrice = 0;

document.getElementById("Apply").addEventListener("click", function () {
  const couponCode = coupon.value;
  if (couponCode == "SELL200") {
    const discount = document.getElementById("Discount");
    const discountPrice = parseFloat(discount.innerText);
    const discountNow = (totalPrice * 0.2).toFixed(2);
    discount.innerText = discountNow;
    const totalPriceTagS = document.getElementById("Total-price-now");
    const totalPriceTag = parseFloat(totalPriceTagS.innerText);
    const priceNow = totalPrice - discountNow;
    totalPriceTagS.innerText = priceNow;
  } else {
    alert("Invalid Cupon Code");
  }
  coupon.value = "";
});

// apply button active/disable
function whenActivate() {
  if (totalPrice >= 200) {
    activateButton.removeAttribute("disabled");
  } else if (totalPrice >= 1) {
    payBtn.removeAttribute("disabled");
  } else {
    activateButton.setAttribute("disabled", true);
    payBtn.setAttribute("disabled", true);
  }
}

// Function for adding prices
function priceAdd(price) {
  const priceAdd = document.getElementById("Total-price");
  const prices = parseFloat(priceAdd.innerText);
  const priceNow = price;
  priceAdd.innerText = prices + priceNow;
  const totalPriceTag = document.getElementById("Total-price-now");
  totalPriceTag.innerText = priceAdd.innerText;
  totalPrice = priceAdd.innerText;
  whenActivate();
  return priceAdd.innerText;
}

// Items function
function items(name) {
  const addItem = document.getElementById("items-name");
  const count = addItem.childElementCount;
  const h4 = document.createElement("h4");
  h4.classList.add("my-6");
  h4.innerHTML = `${count}. ${name}`;
  addItem.appendChild(h4);
}
// coupons,applybutton and pay button
const coupon = document.getElementById("coupon");
const activateButton = document.getElementById("Apply");
const payBtn = document.getElementById("pay");

var totalPrice = 0;

document.getElementById("Apply").addEventListener("click", function () {
  const couponCode = coupon.value;
  if (couponCode == "SELL200") {
    const discount = document.getElementById("Discount");
    const discountPrice = parseFloat(discount.innerText);
    const discountNow = (totalPrice * 0.2).toFixed(2);
    discount.innerText = discountNow;
    const totalPriceTagS = document.getElementById("Total-price-now");
    const totalPriceTag = parseFloat(totalPriceTagS.innerText);
    const priceNow = totalPrice - discountNow;
    totalPriceTagS.innerText = priceNow;
  } else {
    alert("Invalid Cupon Code");
  }
  coupon.value = "";
});

// apply button active/disable
function whenActivate() {
  if (totalPrice >= 200) {
    activateButton.removeAttribute("disabled");
  } else if (totalPrice >= 1) {
    payBtn.removeAttribute("disabled");
  } else {
    activateButton.setAttribute("disabled", true);
    payBtn.setAttribute("disabled", true);
  }
}
