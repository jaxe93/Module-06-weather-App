var dummyData;

//function to get history out of local storage.

getHistoty()
if (!window.localStorage.getItem("cityHistory")) {
    
    window.localStorage.setItem("cityHistory",JSON.stringify({})) 
}

// emojis that will populate corrisponding to what kind of weather is happening, as found in the API

var emojis= {
    Clouds: "&#9729;",
    Clear: "&#9728;",
    Rain: "&#127783;",
    Thunder: "&#127785;",
    Snow: "&#127784;",
}

//cityname, date, temp, humidity, and emoji that goes with information that is pulled from API

var data= [
   {
        CityName: undefined, Date: undefined, Temp: undefined, Humidity: undefined, Wind: undefined, Weather: undefined,
    }, 
    {
        CityName: undefined, Date: undefined, Temp: undefined, Humidity: undefined, Wind: undefined, Weather: undefined,
    },
    {
        CityName: undefined, Date: undefined, Temp: undefined, Humidity: undefined, Wind: undefined, Weather: undefined,
    },
    {
        CityName: undefined, Date: undefined, Temp: undefined, Humidity: undefined, Wind: undefined, Weather: undefined,
    },
    {
        CityName: undefined, Date: undefined, Temp: undefined, Humidity: undefined, Wind: undefined, Weather: undefined,
    },
    {
        CityName: undefined, Date: undefined, Temp: undefined, Humidity: undefined, Wind: undefined, Weather: undefined,
    },
]

//function for getting history and then building button to click on to retrieve from local storage.

function getHistoty() {
    var hist = JSON.parse(window.localStorage.getItem ("cityHistory"))
    var HTML = ""
    for (var key in hist) {
        HTML += `
        <li><button onclick="search('${hist[key]}')">${hist[key]} </button></li>
        `
    }
    document.getElementById("cityHistory").innerHTML = HTML
}

//function for building my forcast

var weather; 
function build() {
document.getElementById("forcasts").removeAttribute("hidden")    
dummyData = weather;
data[0].CityName = dummyData.city.name
var hist = JSON.parse(window.localStorage.getItem ("cityHistory"))
hist[dummyData.city.name] = dummyData.city.name
window.localStorage.setItem ("cityHistory",JSON.stringify(hist))
data[0].Date = dummyData.list[0].dt_txt.slice(0,10)
data[0].Temp = (dummyData.list[0].main.temp*9/5-459.67 + "").slice(0,4)
data[0].Humidity = dummyData.list[0].main.humidity
data[0].Wind = dummyData.list[0].wind.speed
data[0].Weather = dummyData.list[0].weather[0].main
var j = 1
for (var i= 0; i < dummyData.list.length; i++) {
    
    if (data[0].Date === dummyData.list[i].dt_txt) {continue;}
    if (dummyData.list[i].dt_txt.includes("18:00:00")) {
        data[j].Date = dummyData.list[i].dt_txt.slice(0,10)
        data[j].Temp = (dummyData.list[i].main.temp*9/5-459.67 + "").slice(0,4)
        data[j].Humidity = dummyData.list[i].main.humidity
        data[j].Wind = dummyData.list[i].wind.speed
        data [j].Weather = dummyData.list[i].weather[0].main 
        
        j++;
    }
}

//var date0= dummyData.list[0].dt_txt cant remember why I made this.  

for (var i= 0; i < data.length; i++) {
    document.getElementById("tempData"+i).innerHTML = "Temprature. " + data[i].Temp
    document.getElementById("humidityData"+i).innerHTML = "Humidity " + data[i].Humidity
    document.getElementById("windData"+i).innerHTML = "Wind Speed " + data[i].Wind
    document.getElementById("date"+i).innerHTML = "Date " + data[i].Date
    document.getElementById("emoji"+i).innerHTML = emojis[data[i].Weather]
}
document.getElementById("cityName").innerHTML = "City: " + data[0].CityName
}

//function for getting longitude and latitude from City name in input.

async function getLonLat(cityName) {
    var apiKey = "261a264429697f4cacc29d41aac775ac"
    var url = `HTTPS://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
    return (await fetch(url)).json();

}

//fuction that inserts lat long, and api key into link for the 5 day forcast

async function getWeather(data) {
    console.log(data)
    var Lat = data[0].lat
    var Lon = data[0].lon
    var apiKey = "261a264429697f4cacc29d41aac775ac"
    var url = `HTTPS://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Lon}&appid=${apiKey}`
    return (await fetch(url)).json();
    
}

function search(cityName = document.getElementById("searchBar").value) {
    getLonLat(cityName)
        .then((data) => getWeather(data))
        .then((data) => {
            weather = data;
            console.log(weather)
            build()
            getHistoty()
        })
        .catch((err) => console.log(err))
}

