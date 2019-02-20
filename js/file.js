var arrowsButon = document.querySelectorAll(".arrows");
var promoSlider = document.querySelectorAll(".promo-sliders-item");
var activeSlide = document.querySelectorAll(".pointer-item");
var currentIndex = 0;

for (var i = 0; i < arrowsButon.length; i++) {
  arrowsButon[i].addEventListener('click', function (e) {
    slideShow(e.target.attributes[1].textContent);
  })
};

function clearClassSlider() {
  for (var i = 0; i < promoSlider.length; i++) {
    promoSlider[i].classList.remove("promo-sliders-active");
    activeSlide[i].classList.remove("pointer-item-current");
  }
};

function slideShow(textContent) {
  if (textContent === "Предыдущий слайдер") {
    currentIndex = (currentIndex + 1) % promoSlider.length;
  } else if (textContent === "Следующий слайдер") {
    currentIndex = (currentIndex - 1) % promoSlider.length;
    if (currentIndex === -1) {
      currentIndex = promoSlider.length - 1;
    }
  };

  clearClassSlider();
  promoSlider[currentIndex].classList.add("promo-sliders-active");
  activeSlide[currentIndex].classList.add("pointer-item-current");
};
var btnDelivery = document.querySelector(".button-delivery");
var btnGuarantee = document.querySelector(".button-guarantee");
var btnCredit = document.querySelector(".button-credit");
var servicesDelivery = document.querySelector(".service-slider-delivery");
var servicesGuarantee = document.querySelector(".service-slider-guarantee");
var servicesCredit = document.querySelector(".service-slider-credit");

btnDelivery.addEventListener("click", function(evt) {
  evt.preventDefault();
  btnDelivery.classList.add("active-slide");
  btnGuarantee.classList.remove("active-slide");
  btnCredit.classList.remove("active-slide");
  servicesDelivery.classList.remove("service-slider-none");
  servicesGuarantee.classList.add("service-slider-none");
  servicesCredit.classList.add("service-slider-none");
});

btnGuarantee.addEventListener("click", function(evt) {
  evt.preventDefault();
  btnDelivery.classList.remove("active-slide");
  btnGuarantee.classList.add("active-slide");
  btnCredit.classList.remove("active-slide");
  servicesDelivery.classList.add("service-slider-none");
  servicesGuarantee.classList.remove("service-slider-none");
  servicesCredit.classList.add("service-slider-none");
});

btnCredit.addEventListener("click", function(evt) {
  evt.preventDefault();
  btnDelivery.classList.remove("active-slide");
  btnGuarantee.classList.remove("active-slide");
  btnCredit.classList.add("active-slide");
  servicesDelivery.classList.add("service-slider-none");
  servicesGuarantee.classList.add("service-slider-none");
  servicesCredit.classList.remove("service-slider-none");
});

var writeButton = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var isStorageSupport = true;
var storage = "";
var smallMap = document.querySelector(".small-map");
var bigMap  = document.querySelector(".modal-map");
var link = document.querySelectorAll(".button-buy");
var cart = document.querySelector(".modal-cart");

try {
  storage = localStorage.getItem("name");
  storage = localStorage.getItem("email");
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

link.addEventListener("click", function(evt) {
  if (evt.target.classList.contains("active-buy")) {
  cart.classList.add("modal-show");
  closeAddProduct.focus();
  }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    bigMap.classList.remove("modal-show");
    cart.classList.remove("modal-show");
  });

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
      if (cart.classList.contains("modal-show")) {
        cart.classList.remove("modal-show");
      }
    }
  });


