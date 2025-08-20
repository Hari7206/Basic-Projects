const body = document.querySelector('body');
const container = document.querySelector('.container');
const item = document.querySelector('.item');


const blue = document.getElementById('blue');
const dark = document.getElementById('dark');
const green = document.getElementById('green');
const red = document.getElementById('red');


function applyTheme(theme) {
    if (theme === "blue") {
        body.style.background = '#f1f5f9';
        container.style.border = '2px solid #d6e8faff';
        container.style.background = '#f1f5f9';
        container.style.color = '#000';
    } 
    else if (theme === "dark") {
        body.style.background = '#000000dc';
        container.style.border = '2px solid #d6e8faff';
        container.style.background = '#000000dc';
        container.style.color = '#fff';
    } 
    else if (theme === "green") {
        body.style.background = '#69f86942';
        container.style.border = '2px solid #14eb14e1';
        container.style.background = '#69f8692a';
        container.style.color = '#14eb14ff';
    } 
    else if (theme === "red") {
        body.style.background = '#c53d1365';
        container.style.border = '2px solid #c53d13af';
        container.style.background = '#c53d132d';
        item.style.color = '#c53d13af';
    }
}

// Event listeners for theme buttons
blue.addEventListener('click', () => {
    applyTheme("blue");
    localStorage.setItem("theme", "blue");
});

dark.addEventListener('click', () => {
    applyTheme("dark");
    localStorage.setItem("theme", "dark");
});

green.addEventListener('click', () => {
    applyTheme("green");
    localStorage.setItem("theme", "green");
});

red.addEventListener('click', () => {
    applyTheme("red");
    localStorage.setItem("theme", "red");
});

// Apply saved theme when page loads
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        applyTheme(savedTheme);
    }
});
