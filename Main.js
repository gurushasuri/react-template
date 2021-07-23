//mobile-open
var mobileTrigger = document.querySelector(".menu-trigger");
if (mobileTrigger) {
    var bodyContainer = document.querySelectorAll("body");
    mobileTrigger.addEventListener("click", (function (e) {
        e.stopPropagation();
        bodyContainer[0].classList.contains("mobile-open") ? bodyContainer[0].classList.remove("mobile-open") : bodyContainer[0].classList.add("mobile-open")
    }))
}

//mobile-close
var closebtn = document.querySelector(".menu-close");
if (closebtn) {
    bodyContainer = document.querySelectorAll("body");
    closebtn.addEventListener("click", (function () {
        bodyContainer[0].classList.remove("mobile-open")
    }))
}
