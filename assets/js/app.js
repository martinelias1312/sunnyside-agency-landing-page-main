"use strict";

const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");

const showNav = () => {
  navList.classList.toggle("hidden");
};

burger.addEventListener("click", showNav);
