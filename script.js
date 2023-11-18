
const searchBtn =document.querySelector('.search')
const inputBox =document.querySelector('.input-box')
const weatherImg=document.querySelector(".weather-img")
const temperature=document.querySelector(".temperature")
const description=document.querySelector(".description")
const humidity=document.querySelector(".humidity")
const windSpeed=document.querySelector(".windSpeed")
const cityName =document.querySelector(".cityName")
const not_found =document.querySelector(".not-found")
const weatherBody =document.querySelector(".weatherBody")


async function checkWeather(city) {
    const api_key = "83b02f22e93d0b58cccd3a21fda29dce"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data = await fetch(`${url}`).then(res=> res.json()) 

    if(weather_data.cod === `404`) {
        not_found.style.display = "block"
        weatherBody.style.display = "none"
        return
    }
    
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}<sup>°C</sup>`
    description.innerHTML = `${weather_data.weather[0].description}`
    windSpeed.innerHTML = `${weather_data.wind.speed}km/h`
    humidity.innerHTML =`${weather_data.main.humidity}%`


    if(weather_data.weather[0].main === 'Clouds'){
        weatherImg.src = './image/clouds.png'
        return
    }else if(weather_data.weather[0].main === 'Clear'){
        weatherImg.src = './image/clear.png'
        return
    }else if(weather_data.weather[0].main === 'Mist'){
        weatherImg.src = './image/mist.png'
        return
    }else if(weather_data.weather[0].main === 'Rain'){
        weatherImg.src = './image/rain.png'
        return
    }else if(weather_data.weather[0].main === 'Sonw'){
        weatherImg.src = './image/sonw.png'
        return
    }else if(weather_data.weather[0].main === 'Haze'){
        weatherImg.src = './image/haze.png'
        return
    }
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    checkWeather(inputBox.value)
    cityName.innerHTML = `${inputBox.value}`
    weatherBody.style.display = "flex"
    inputBox.value = ''
    console.log(weather_data)
})