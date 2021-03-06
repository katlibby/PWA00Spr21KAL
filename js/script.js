const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class','container');

app.appendChild(container);

const apiID = 'dcc6f30a9e0ed59a90ecccbfed5f2b58';

let request = new XMLHttpRequest();

let request1 = new XMLHttpRequest();

var getZip = window.prompt("enter your zip code: ");

var zipToAPI = 'http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1586468027&appid={API key}';

var cityLat;
var cityLon;

request.open('GET',zipToAPI,true);
request.send();
request.onload = function(){
  console.log(cityLat);
  var data = JSON.parse(this.response);
  console.log(data);
  console.log(request.status);
  if(request.status>=200 && request.status<400){
    cityLat = data.lat;
    cityLon = data.lon;

    const card = document.createElement('div');
    card.setAttribute('class','card');
    const city = document.createElement('h1');
    city.textContent = data.name;

    container.appendChild(card);
    card.appendChild(city);

    } else{
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = "Weather report not found for that day!";
      app.appendChild(errorMessage);
    } 
  } 


//historical weather data for the previous 5 days
var onecallAPI = 'https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}';

 {
    "lat": 60.99,
    "lon": 30.9,
    "timezone": "Europe/Moscow",
    "timezone_offset": 10800"
    "current": {
      "dt": 1586468027,
      "sunrise": 1586487424,
      "sunset": 1586538297,
      "temp": 274.31,
      "feels_like": 269.79,
      "pressure": 1006,
      "humidity": 72,
      "dew_point": 270.21,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 3,
      "wind_deg": 260,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ]
    },
    "hourly": [
      {
        "dt": 1586390400,
        "temp": 278.41,
        "feels_like": 269.43,
        "pressure": 1006,
        "humidity": 65,
        "dew_point": 272.46,
        "clouds": 0,
        "wind_speed": 9.83,
        "wind_deg": 60,
        "wind_gust": 15.65,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
    }
