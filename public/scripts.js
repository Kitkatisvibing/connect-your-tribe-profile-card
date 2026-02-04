let leftButton = document.querySelector('.blinkies')
leftButton.addEventListener('click', slideRight)
function slideRight() {
    leftButton.classList.toggle('leftMoved')
}