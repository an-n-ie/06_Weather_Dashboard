// html static selectors
var cityFormEl = document.querySelector("#city-form")
var cityEl = document.querySelector("#city")

var cityHeaderEl = document.querySelector("#city-header")
var tempEl = document.querySelector("#temp")
var windEl = document.querySelector("#wind")
var humidityEl = document.querySelector("#humidity")
var uviEl = document.querySelector("#uvi")

var cityHeaderC1El = document.querySelector("#city-header-c1")
var tempC1El = document.querySelector("#temp-c1")
var windC1El = document.querySelector("#wind-c1")
var humidityC1El = document.querySelector("#humidity-c1")
var uviC1El = document.querySelector("#uvi-c1")

var cityHeaderC2El = document.querySelector("#city-header-c2")
var tempC2El = document.querySelector("#temp-c2")
var windC2El = document.querySelector("#wind-c2")
var humidityC2El = document.querySelector("#humidity-c2")
var uviC2l = document.querySelector("#uvi-c2")

var searchBtn = document.querySelector("#searchBtn")
var api = "43307f36c133c1b4d80feb3644b2ab3e"

// function to 

function displayWeather(event){
    event.preventDefault()
    var cityName=cityEl.value
    var urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=imperial`
    fetch(urlCurrent)
    .then(function(response){
        return response.json()
    })
    .then(function(currentData){
        console.log(currentData)
    })



}



// addeventlistener for button
cityFormEl.addEventListener("submit", displayWeather)