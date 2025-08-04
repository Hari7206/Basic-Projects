const toggle = document.getElementById('toggleDark')
const body = document.querySelector('body')

toggle.addEventListener('click' , function () {
    this.classList.toggle('fa-moon')
        if (this.classList.toggle('fa-sun')) {
            body.style.background = 'white';
            body.style.color = 'red';
            body.style.transition = '2s';
        }

        else {
            body.style.background = 'black';
            body.style.color = 'white';
            body.style.transition = '2s';
        }

})