let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");
navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

//------------------------ Register ----------------------
function register(){
  
}

//------------------------ For Users ----------------------
const fs = require('fs');
class User{
  constructor(firstName, lastName, email, education, address, city, province, zip, password){
    this.cart = [];
    this.items = this.cart.length;
    this.UserData = {'firstName':firstName,'lastName':lastName,'email':email,'education':education,'address':address,'city': city,"province":province,"zip":zip,"password":password}
}
  addCart(index){
    this.cart.push(tutor[index]);
    this.items = this.cart.length;
  }

  getItems(){
    return this.items;
  }

  getCart(){
    this.cart;
  }

}

