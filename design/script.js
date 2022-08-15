"use strict";
// ! FOR LESSONS NAMES //
// ? FOR REGULAR COMMENTS //

// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//    btn.addEventListener("click", function () {
//       btn.parentNode.classList.toggle("active");
//    });
// });

const containers = document.querySelectorAll(".question-container");

containers.forEach(function (container) {
   container.addEventListener("click", function () {
      container.classList.toggle("active");
   });
});
