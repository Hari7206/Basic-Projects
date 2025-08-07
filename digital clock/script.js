function displaytime() {
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    document.querySelector('.hour').innerHTML = hrs;
    document.querySelector('.minute').innerHTML = min;
    document.querySelector('.second').innerHTML = sec;

    let sesion = document.querySelector('.sessions')
    
    if (hrs >= 12) {
        sesion.innerHTML = 'PM'
    }
    else {
        sesion.innerHTML = 'AM'
    }

}

setInterval(displaytime , 10)