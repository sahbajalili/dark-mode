let doc = document

let body = doc.querySelector('body')
let buttonClick = doc.querySelector('.click')
let lightText = doc.querySelector('.light-text')
let darkText = doc.querySelector('.dark-text')

buttonClick.addEventListener('click' , click)

let lightFlag = true 

function click() {
    if (lightFlag) {
        buttonClick.style.left = '55px' 
        body.style.background = '#02011c'
        lightText.style.color = '#ffffff'
        darkText.style.color = '#ffffff'
        lightFlag = false
    } else {
        buttonClick.style.left = '5px'
        body.style.background = '#f5fdff'
        lightText.style.color = '#000000'
        darkText.style.color = '#000000'
        lightFlag = true
    }
    
}