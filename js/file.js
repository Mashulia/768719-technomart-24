var arrowsButon = document.querySelectorAll(".arrows");
var promoSlider = document.querySelectorAll(".promo-sliders-item");
var activeSlide = document.querySelectorAll(".pointer-item");
var serviceButton = document.querySelectorAll(".slide-button");
var serviceSlider = document.querySelectorAll(".service-slider-item");
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


function clearClassService() {
  for (var i = 0; i < serviceSlider.length; i++) {
    serviceButton[i].classList.remove("active-button");
    serviceSlider[i].classList.remove("service-slider-active");
  }
};

for (var i = 0; i < serviceButton.length; i++) {
  serviceButton[i].addEventListener("click", function (evt) {
    serviceShow(evt.target.textContent);
  })
};

function serviceShow(textContent) {
  clearClassService();

  if (textContent === "Доставка") {
    serviceButton[0].classList.add("active-button");
    serviceSlider[0].classList.add("service-slider-active");
  }
  if (textContent === "Гарантия") {
    serviceButton[1].classList.add("active-button");
    serviceSlider[1].classList.add("service-slider-active");
  }
  if (textContent === "Кредит") {
    serviceButton[2].classList.add("active-button");
    serviceSlider[2].classList.add("service-slider-active");
  }
};

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


