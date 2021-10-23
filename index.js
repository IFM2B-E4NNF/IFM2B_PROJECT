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
function register(userObj){
  const query = {
    text: "INSERT INTO users(fullName, age, date, time, assistantName, comments) VALUES($1,$2,$3,$4,$5,$6)",
    values: [
      userObj.fullName,
      userObj.age,
      userObj.date,
      userObj.time,
      userObj.assistantName,
      userObj.comments,
    ],
  };
  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    console.log("User Saved");
  });
}

//------------------------ For Users ----------------------
const fs = require('fs');

function addCart(index){
    this.cart.push(tutor[index]);
    this.items = this.cart.length;
  }

