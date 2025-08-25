// Select all the necessary HTML elements
const search = document.getElementById('placename');
const button = document.getElementById('btn');
const cityName = document.querySelector('.cityname');
const temprature = document.querySelector('.temp');
const weatherCondition = document.querySelector('.weatherconditon');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.windspeed');

const apiKey = "8ebf475cfec9915c39a1cb676dddbc52";


button.addEventListener('click', () => {
    let userinput = search.value.trim();
    if (userinput) {
        getWeather(userinput); 
    }
});



async function getWeather(city) {
    
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        let response = await fetch(url);
        let data = await response.json();
        
        
        if (data.cod === "404") {
            alert(data.message);
            return;
        }

        console.log(data); 
        cityName.textContent = data.name
        temprature.textContent = Math.round(data.main.temp) + "°C"
        weatherCondition.textContent = data.weather[0].description ;
        humidity.textContent = "Humidity: " + data.main.humidity + "%"
        windSpeed.textContent = "Wind: " + data.wind.speed + " km/h";

       
        
    } catch(error) {
        console.error("Error fetching weather data:", error);
        alert("An error occurred while fetching the weather data.");
    }
}
