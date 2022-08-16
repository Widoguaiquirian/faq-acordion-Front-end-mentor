"use strict";
// ! FOR LESSONS NAMES //
// ? FOR REGULAR COMMENTS //

const containers = document.querySelectorAll(".question-container");

containers.forEach(function (container) {
   container.addEventListener("click", function () {
      removeACtive();
      container.classList.add("active");
   });
});

const removeACtive = function () {
   containers.forEach(function (container) {
      container.classList.remove("active");
   });
};
