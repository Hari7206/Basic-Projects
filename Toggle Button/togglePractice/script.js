const toggle = document.getElementById('togglebtn');
const body = document.querySelector('body')

toggle.addEventListener('change', function(){
    if (toggle.checked) {
        body.style.background = 'black'
    }
    else {
        body.style.background = 'white'
    }
})