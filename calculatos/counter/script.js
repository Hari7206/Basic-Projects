let result = document.querySelector('.result');
let incre = document.querySelector('.incre');
let decre = document.querySelector('.decre');
let reset = document.querySelector('.reset');

let count = 0; 

function updateDisplay() {
    result.textContent = count;
    if (count > 0) {
        result.style.color = 'white';
    } else if (count < 0) {
        result.style.color = 'red';
    } else {
        result.style.color = '#000';
    }
}


incre.addEventListener('click', () => {    
    count++;
    updateDisplay();
});

decre.addEventListener('click', () => {
    count--;
    updateDisplay();
});

reset.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});
