const toggleBtn = document.querySelector('.toggleButton');
const toggleBg = document.querySelector('.toggle');
const text = document.querySelector('.text');
const body = document.querySelector('body');



toggleBtn.addEventListener('click', function (e) {
     e.preventDefault();
    toggleBg.classList.toggle('active');


    if (toggleBg.classList.contains('active')) {
        text.innerHTML = "on";
        body.style.background = 'white'


    }
    else {
          text.innerHTML = "off";
          body.style.background = 'black'
    }
});
