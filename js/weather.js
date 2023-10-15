const API_KEY = "67dd6d336c80a365509cffc4389c5b44";
const weather = document.getElementById("weather");
const weatherCity = document.querySelector("#weather span:first-child");
const weatherMain = document.querySelector("#weather span:last-child");

async function onGeoOk(position)
{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    weatherCity.innerText = json.name;
    weatherMain.innerText = json.weather[0].main;
}

function onGeoError()
{
    console.log("Error! Geo Location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
