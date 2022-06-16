const hamburger = document.querySelector("#hamburger")
const mobileMenu = document.querySelector(".mobilemenu")
const slideCards = document.querySelectorAll(".card")

 const sliderIndicatorParent = document.querySelector(
     "#slideIndicator"),
    sliderIndicator = sliderIndicatorParent.querySelectorAll(
        "span")
const form = document.querySelector(
    "form"),
    email = form.querySelector(
        "#email"),
    errorTxt = form.querySelector(
        "#errortxt")
hamburger.addEventListener("click", ()=>{
    mobileMenu.classList.toggle(
        "show")
    mobileMenu.classList.add(
        "no-scroll")

    if (mobileMenu.classList.contains(
        "show")) {
        hamburger.src = "images/icon-close.svg"
    }else{
        hamburger.src = "images/icon-hamburger.svg"
        mobileMenu.classList.remove(
            "no-scroll")
    }
})

let slideIndex = 0

const slideTestimonial = () => {
    
    if(window.screen.width > 768){
        return
    }
    slideIndex++

    if(slideIndex > slideCards.length - 1){
        slideIndex = 0
    }
    slideCards.forEach((slide) => {
        slide.classList.add(
            "hidden")
    })
    slideCards[slideIndex].classList.remove(
            "hidden")

    sliderIndicator.forEach(slider => {
        slider.style.backgroundColor = "white"
    })
    if (slideIndex === 0) {
        one.style.backgroundColor = "hsl(12, 88%, 59%)"
    }
    if (slideIndex === 1) {
        two.style.backgroundColor = "hsl(12, 88%, 59%)"
    }
    if (slideIndex === 2) {
        three.style.backgroundColor = "hsl(12, 88%, 59%)"
    }
    if (slideIndex === 3) {
        four.style.backgroundColor = "hsl(12, 88%, 59%)"
    }

}
setInterval(() => slideTestimonial(), 3000);

form.addEventListener("submit", e => {
    e.preventDefault()

    checkEmail()

    email.onkeyup = () => checkEmail()

    function checkEmail() {
        let eValue = email.value
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (eValue === "") {
            email.classList.add(
                "error")
            errorTxt.textContent = "Please enter your email"
        }else if(!eValue.match(pattern)){
            email.classList.add(
                "error")
            errorTxt.textContent = "Please insert a valid email"
        }else {
            email.classList.remove(
                "error")
            errorTxt.textContent = ""
        }
    }
})

slideTestimonial()