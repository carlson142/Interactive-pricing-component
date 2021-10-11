const slider = document.querySelector(".component__top--slider-input");
const vieversContainer = document.getElementById("vievers");
const priceContainer = document.getElementById("price");
const body = document.querySelector("body");
const test = document.querySelector(".test");

const toggleBtn = document.getElementById("switch");

const prices = [8, 12, 16, 24, 36];
const discountPrices = [6, 9, 12, 18, 27];
/////////////////////////////////////////////////////////////////////////////////
// FOR SLIDER
function change(e) {
  // VIEVERS
  if (Number(e.target.value) < 10000) {
    vieversContainer.innerHTML = `${e.target.value.slice(0, 1)}K`;
  } else if (Number(e.target.value) < 100000) {
    vieversContainer.innerHTML = `${e.target.value.slice(0, 2)}K`;
  } else if (Number(e.target.value) < 1000000) {
    vieversContainer.innerHTML = `${e.target.value.slice(0, 3)}K`;
  } else vieversContainer.innerHTML = `1M`;

  //PRICE
  if (Number(e.target.value) >= 0 && Number(e.target.value) < 50000) {
    if (flag % 2) {
      priceContainer.textContent = `$${discountPrices[0]}.00`;
    } else priceContainer.textContent = `$${prices[0]}.00`;
  } else if (
    Number(e.target.value) > 50000 &&
    Number(e.target.value) < 100000
  ) {
    //priceContainer.textContent = `$${prices[1]}.00`;
    if (flag % 2) {
      priceContainer.textContent = `$${discountPrices[1]}.00`;
    } else priceContainer.textContent = `$${prices[1]}.00`;
  } else if (
    Number(e.target.value) > 100000 &&
    Number(e.target.value) < 500000
  ) {
    //priceContainer.textContent = `$${prices[2]}.00`;
    if (flag % 2) {
      priceContainer.textContent = `$${discountPrices[2]}.00`;
    } else priceContainer.textContent = `$${prices[2]}.00`;
  } else if (
    Number(e.target.value) > 500000 &&
    Number(e.target.value) < 1000000
  ) {
    //priceContainer.textContent = `$${prices[3]}.00`;
    if (flag % 2) {
      priceContainer.textContent = `$${discountPrices[3]}.00`;
    } else priceContainer.textContent = `$${prices[3]}.00`;
  } else if (Number(e.target.value) === 1000000) {
    //priceContainer.textContent = `$${prices[4]}.00`;
    if (flag % 2) {
      priceContainer.textContent = `$${discountPrices[4]}.00`;
    } else priceContainer.textContent = `$${prices[4]}.00`;
  }
}

function addDiskount() {
  let a = Number(vieversContainer.textContent.replace("K", ""));

  if (a >= 0 && a < 50) {
    priceContainer.textContent = `$${discountPrices[0]}.00`;
  } else if (a >= 50 && a < 100) {
    priceContainer.textContent = `$${discountPrices[1]}.00`;
  } else if (a >= 100 && a < 500) {
    priceContainer.textContent = `$${discountPrices[2]}.00`;
  } else if (a >= 500 && a < 1000) {
    priceContainer.textContent = `$${discountPrices[3]}.00`;
  } else {
    priceContainer.textContent = `$${discountPrices[4]}.00`;
  }
}

function removeDiscount() {
  let a = Number(vieversContainer.textContent.replace("K", ""));

  if (a >= 0 && a < 50) {
    priceContainer.textContent = `$${prices[0]}.00`;
  } else if (a >= 50 && a < 100) {
    priceContainer.textContent = `$${prices[1]}.00`;
  } else if (a >= 100 && a < 500) {
    priceContainer.textContent = `$${prices[2]}.00`;
  } else if (a >= 500 && a < 1000) {
    priceContainer.textContent = `$${prices[3]}.00`;
  } else {
    priceContainer.textContent = `$${prices[4]}.00`;
  }
}
/////////////////////////////////////////////////////////////////////////////////

// DESKTOP
slider.addEventListener("mousemove", change);

//MOBILE
slider.addEventListener("change", change);

// DISCOUNT
let flag = 0;
toggleBtn.addEventListener("click", (e) => {
  if (e.target) {
    flag++;

    if (flag % 2) {
      addDiskount();
    } else {
      removeDiscount();
    }
  }
  return flag;
});

// COLORIZE TRACK
slider.addEventListener("input", (e) => {
  if (body.getBoundingClientRect().width <= 630) {
    test.style.width = `${Number(slider.value) / 4000}px`;
  } else {
    test.style.width = `${Number(slider.value) / 2085}px`;
  }
});
