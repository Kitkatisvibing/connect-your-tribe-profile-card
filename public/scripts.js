let leftButton = document.querySelector('.blinkieButton')
leftButton.addEventListener('click', slideRight)
function slideRight() {
    leftButton.classList.toggle('leftMoved')
    socialButton.classList.remove('rightMoved')
    stampButton.classList.remove('rightMoved')
}

let socialButton = document.querySelector('.socialButton')
socialButton.addEventListener('click', slideLeft)
function slideLeft() {
    socialButton.classList.toggle('rightMoved')
    leftButton.classList.remove('leftMoved')
    stampButton.classList.remove('rightMoved')
}

let stampButton = document.querySelector('.stampButton')
stampButton.addEventListener('click', leftSlide)
function leftSlide() {
    stampButton.classList.toggle('rightMoved')
    leftButton.classList.remove('leftMoved')
    socialButton.classList.remove('rightMoved')
}

