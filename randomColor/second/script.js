let red = document.querySelector('.red')
let blue = document.querySelector('.blue')
let green = document.querySelector('.green')
let pink = document.querySelector('.pink')

let changecolor = (color) => {
    document.body.style.background =  color
}

red.addEventListener('click' , () =>changecolor('red'))
green.addEventListener('click' , ()=> changecolor('green'))
pink.addEventListener('click' , () =>changecolor('pink'))
blue.addEventListener('click' , () =>changecolor('blue'))