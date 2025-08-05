const toggle = document.getElementById('toggleButton');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    this.classList.toggle('fa-moon');
    this.classList.toggle('fa-sun');

    if (this.classList.contains('fa-sun')) {
        body.style.background = 'white';
        body.style.color = 'black';

    } else {
        body.style.background = 'black';
        body.style.color = 'white';
    }

    body.style.transition = '2s';
});
