var buyButton = document.querySelectorAll(".button-buy");
var cartPopup = document.querySelector(".modal-cart");
var closeBuy = cartPopup.querySelector(".modal-close");

for (var i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  })
};

closeBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (cartPopup.classList.contains("modal-show")) {
        cartPopup.classList.remove("modal-show");
      }
    }
  });
