# 06 Server-Side APIs: Weather Dashboard

## Introduction
```
This was the project that I had been fearing ever since learing of its exsistance.
However after starting, and proceeding through this build I began to have alot of fun, and 
while I broke it several times, I found what I believe to be a unique way to write, and use 
APIs, which i'm sure will come in handy in the future!
```

## Features

```
Real-time weather data retrieval
Display of current weather conditions, forecasts, and other relevant information
User-friendly interface with a mid 2000s feel
Location-based weather updates
Saved locations for further use, and one click buttons that will display those results.
```

### Links
```
https://github.com/jaxe93/Module-06-weather-App#features
https://jaxe93.github.io/Module-06-weather-App/
```

## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. The base URL should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Conclusion

```
This was a very Hard project, but I believe that if I was able to achieve the main goals located within the acceptance criteria of this project.  I was alost Able to take the User story, and be able to provide exactly what they wanted.  
```