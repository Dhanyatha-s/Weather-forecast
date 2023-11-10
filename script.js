const apiKey = "23493a6513bcfd5175ce37e7820f5db6"

const forecastEl = document.getElementById("forecast")
const cityInputEl = document.getElementById("City-input")

const formEl = document.querySelector("form")

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue)
})

async function getWeatherData(cityValue){
    try{
        const response = await fetch('https://api.openweathermap.org/data/weather?q=${cityValue}&appid=${apiKey}&units=metric')

        if(!response.ok){
            throw new Error("Network response was not ok")
        }
        const data = await response.json()
        
        const temp = math.round(data.main.temp)
        const description = data.weather[0].description
        const icon = data.weather[0].icon

        const details = [
            'Feels Like: ${Math.round(data.main.feels_like)}',
            'Humidity: ${(data.main.humidity)}%',
            'Wind Speed: ${(data.wind.speed)}m/s',
        ]

        forecastEl.querySelector("#icon").innerHTML = "http://openweathermap.org/img/wn/${icon}.png"
        forecastEl.querySelector("#temp").textContent = "${temp}°C"
        forecastEl.querySelector("#description").textContent = "${description}"
        forecastEl.querySelector("#details").innerHTML = details.map((details) =>'<div>${details}</div>').join("");

    }
    catch(error){
        
    }
}