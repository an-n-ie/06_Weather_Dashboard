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
var uviC2El = document.querySelector("#uvi-c2")

var cityHeaderC3El = document.querySelector("#city-header-c3")
var tempC3El = document.querySelector("#temp-c3")
var windC3El = document.querySelector("#wind-c3")
var humidityC3El = document.querySelector("#humidity-c3")
var uviC3El = document.querySelector("#uvi-c3")

var cityHeaderC4El = document.querySelector("#city-header-c4")
var tempC4El = document.querySelector("#temp-c4")
var windC4El = document.querySelector("#wind-c4")
var humidityC4El = document.querySelector("#humidity-c4")
var uviC4El = document.querySelector("#uvi-c4")

var cityHeaderC5El = document.querySelector("#city-header-c5")
var tempC5El = document.querySelector("#temp-c5")
var windC5El = document.querySelector("#wind-c5")
var humidityC5El = document.querySelector("#humidity-c5")
var uviC5El = document.querySelector("#uvi-c5")

var searchBtn = document.querySelector("#searchBtn")
var api = "b8b1072c7685f8cfc1089efb7de302ce"



function displayWeather(event) {
    event.preventDefault()
    var cityName = cityEl.value
    var urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=imperial`


    fetch(urlCurrent)
        .then(function (response) {
            return response.json()
        })
        .then(function (currentData) {

            console.log(currentData)
            var currentDayUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&appid=${api}&units=imperial`

            fetch(currentDayUrl)
                .then(function (response) {
                    return response.json()
                })
                .then(function (fiveDayData) {
                    console.log(fiveDayData)

                    // displays current weather 
                    var currentDate = moment.unix(currentData.dt).format("MM/DD/YYYY")
                    var iconImage = document.createElement("img")
                    iconImage.setAttribute("src", `http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`)
                    cityHeaderEl.textContent = currentData.name + " " + currentDate
                    cityHeaderEl.appendChild(iconImage)
                    tempEl.textContent = currentData.main.temp + " F"
                    windEl.textContent = currentData.wind.speed + " MPH"
                    humidityEl.textContent = currentData.main.humidity + "%"
                    uviEl.textContent = fiveDayData.current.uvi

                    // displays weather for the next 5 day
                    var nextDate = moment.unix(fiveDayData.daily[1].dt).format("MM/DD/YYYY")
                    var iconImage1 = document.createElement("img")
                    iconImage1.setAttribute("src", `http://openweathermap.org/img/wn/${fiveDayData.daily[1].weather[0].icon}@2x.png`)
                    cityHeaderC1El.textContent = nextDate
                    cityHeaderC1El.appendChild(iconImage1)
                    tempC1El.textContent = fiveDayData.daily[1].temp.day + " F"
                    windC1El.textContent = fiveDayData.daily[1].wind_speed + " MPH"
                    humidityC1El.textContent = fiveDayData.daily[1].humidity + "%"
                    uviC1El.textContent = fiveDayData.daily[1].uvi

                    var nextDate2 = moment.unix(fiveDayData.daily[2].dt).format("MM/DD/YYYY")
                    var iconImage2 = document.createElement("img")
                    iconImage2.setAttribute("src", `http://openweathermap.org/img/wn/${fiveDayData.daily[2].weather[0].icon}@2x.png`)
                    cityHeaderC2El.textContent = nextDate2
                    cityHeaderC2El.appendChild(iconImage2)
                    tempC2El.textContent = fiveDayData.daily[2].temp.day + " F"
                    windC2El.textContent = fiveDayData.daily[2].wind_speed + " MPH"
                    humidityC2El.textContent = fiveDayData.daily[2].humidity + "%"
                    uviC2El.textContent = fiveDayData.daily[2].uvi

                    var nextDate3 = moment.unix(fiveDayData.daily[3].dt).format("MM/DD/YYYY")
                    var iconImage3 = document.createElement("img")
                    iconImage3.setAttribute("src", `http://openweathermap.org/img/wn/${fiveDayData.daily[3].weather[0].icon}@2x.png`)
                    cityHeaderC3El.textContent = nextDate3
                    cityHeaderC3El.appendChild(iconImage3)
                    tempC3El.textContent = fiveDayData.daily[3].temp.day + " F"
                    windC3El.textContent = fiveDayData.daily[3].wind_speed + " MPH"
                    humidityC3El.textContent = fiveDayData.daily[3].humidity + "%"
                    uviC3El.textContent = fiveDayData.daily[3].uvi

                    var nextDate4 = moment.unix(fiveDayData.daily[4].dt).format("MM/DD/YYYY")
                    var iconImage4 = document.createElement("img")
                    iconImage4.setAttribute("src", `http://openweathermap.org/img/wn/${fiveDayData.daily[4].weather[0].icon}@2x.png`)
                    cityHeaderC4El.textContent = nextDate4
                    cityHeaderC4El.appendChild(iconImage4)
                    tempC4El.textContent = fiveDayData.daily[4].temp.day + " F"
                    windC4El.textContent = fiveDayData.daily[4].wind_speed + " MPH"
                    humidityC4El.textContent = fiveDayData.daily[4].humidity + "%"
                    uviC4El.textContent = fiveDayData.daily[4].uvi

                    var nextDate5 = moment.unix(fiveDayData.daily[5].dt).format("MM/DD/YYYY")
                    var iconImage5 = document.createElement("img")
                    iconImage5.setAttribute("src", `http://openweathermap.org/img/wn/${fiveDayData.daily[5].weather[0].icon}@2x.png`)
                    cityHeaderC5El.textContent = nextDate5
                    cityHeaderC5El.appendChild(iconImage5)
                    tempC5El.textContent = fiveDayData.daily[5].temp.day + " F"
                    windC5El.textContent = fiveDayData.daily[5].wind_speed + " MPH"
                    humidityC5El.textContent = fiveDayData.daily[5].humidity + "%"
                    uviC5El.textContent = fiveDayData.daily[5].uvi



                })

        })
}


// eventlistener to display weather info when searched city is submitted
cityFormEl.addEventListener("submit", displayWeather)