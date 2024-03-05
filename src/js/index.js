const buttons = document.querySelectorAll('.btn')
const submitButton = document.querySelector('.submit-button')
const rating = document.querySelector('.rating')
const ratingCard = document.querySelector('.card-rating')
const thanksCard = document.querySelector('.card-thanks')

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        const active = document.querySelector('.active')
        if (active) {
            active.classList.remove('active')
        }
        button.classList.add('active')
    })
})

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        const active = document.querySelector('.active')
        rating.innerHTML = active.innerHTML
    })
})

submitButton.addEventListener('click', function() {
    ratingCard.classList.add('none')
    thanksCard.classList.remove('none')
})