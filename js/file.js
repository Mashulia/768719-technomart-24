var writeButton = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal-write-us");
var closeWriteUs = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var isStorageSupport = true;
var storage = "";
var smallMap = document.querySelector(".small-map");
var bigMap  = document.querySelector(".modal-map");
var closeMap = bigMap.querySelector(".modal-close");
var buyButton = document.querySelectorAll(".button-buy");
var cartPopup = document.querySelector(".modal-cart");
var closeBuy = cartPopup.querySelector(".modal-close");

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}


writeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
      name.value = storage;
      email.focus();
    } else {
      name.focus();
    }
  });

smallMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    bigMap.classList.add("modal-show");
});

for (var i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  })
};

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  });

closeWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    bigMap.classList.remove("modal-show");
  });

closeBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
      if (bigMap.classList.contains("modal-show")) {
        bigMap.classList.remove("modal-show");
      }
      if (cartPopup.classList.contains("modal-show")) {
        cartPopup.classList.remove("modal-show");
      }
    }
  });


