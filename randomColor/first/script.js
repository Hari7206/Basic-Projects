const btn = document.getElementById('btn')

let colornum = () => {
    return Math.floor(Math.random() * 256 );
}

let color = () => {
    let coler = `rgb(${colornum()}, ${colornum()}, ${colornum()})`
    document.body.style.background = coler
}
const colorchanger = btn.addEventListener('click' , color)
window.addEventListener('load' , color)