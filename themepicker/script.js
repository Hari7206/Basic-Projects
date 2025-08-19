const  body = document.querySelector('body')
const blue = document.getElementById('blue')
const dark = document.getElementById('dark')
const green = document.getElementById('green')
const red = document.getElementById('red')
const container = document.querySelector('.container')
const item = document.querySelector('item')


blue.addEventListener('click' , () =>{
    body.style.background = '#f1f5f9'
    container.style.border = '2px solid #d6e8faff'
    container.style.background = '#f1f5f9'
    container.style.color = '#000'



})
dark.addEventListener('click' , () =>{
    body.style.background = '#000000dc'
     container.style.border = '2px solid #d6e8faff'
      container.style.background = '#000000dc'
    container.style.color = '#fff'
    
})
green.addEventListener('click' , () =>{
    body.style.background = '#69f86942'
     container.style.border = '2px solid #14eb14e1'
       container.style.background = '#69f8692a'
    container.style.color = '#14eb14ff'
   
})
red.addEventListener('click' , () =>{
    body.style.background = '#c53d1365'
    container.style.border = '2px solid #c53d13af'
      container.style.background = '#c53d132d'
    container.style.color = '#c53d13af'
})

