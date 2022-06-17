// for weather
let date = new Date
const wheatherValue = {
  url: "https://api.openweathermap.org/data/2.5/",
  appid: "9140380415ce30a751b279e449096e79",
};
const locat = document.querySelector(".city");
const cloud = document.querySelector(".cloud");
const weatherIcon = document.querySelector(".weather-icon");
const weatherTemp = document.querySelector(".weather-temp");
const weatherFeels = document.querySelector(".weather-feels-like");
const cityId = "707471";
const wheatherUrl = `${wheatherValue.url}weather?id=${cityId}&appid=${wheatherValue.appid}`;
let dateWeather = `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`

// for war statistics
let dateWar = `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()-1}`

// data weather
async function loadWeather(url) {
  const response = await fetch(url);
  const data = await response.json();

  return getWeather(data);
}
loadWeather(wheatherUrl);

function getWeather(data) {
    locat.innerHTML = data.name
    cloud.innerHTML = data.weather[0].main
    weatherTemp.innerHTML = Math.round(data.main.temp - 273) + '&deg'
    weatherFeels.innerHTML = Math.round(data.main.feels_like - 273) + '&deg'
    weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
    document.querySelector('.date-weather').innerHTML = dateWeather
}

// data war stats
async function loadWarStats(){
    const response = await fetch(`https://russianwarship.rip/api/v1/statistics/${dateWar}`)
    const result = await response.json()
    return getWarStats(result)
}
loadWarStats()
function getWarStats(result){
    for(let key in result.data.stats){
        if(document.querySelector(`.${key}`)){
            document.querySelector(`.${key}`).innerHTML = result.data.stats[key]
        }
    }
    document.querySelector('.date-title').innerHTML = result.data.date    
    document.querySelector('.day-of-war').innerHTML = result.data.day
}



// If add select with city select
// const city = [
//   {
//     id: 702550,
//     name: "Lviv",
//     state: "",
//     country: "UA",
//     coord: {
//       lon: 24.023239,
//       lat: 49.838261,
//     },
//   },
//   {
//     id: 691650,
//     name: "Ternopil",
//     state: "",
//     country: "UA",
//     coord: {
//       lon: 25.60556,
//       lat: 49.555889,
//     },
//   },
//   {
//     id: 707471,
//     name: "Ivano-Frankivsk",
//     state: "",
//     country: "UA",
//     coord: {
//       lon: 24.709721,
//       lat: 48.921501,
//     },
//   },
//   {
//     id: 702569,
//     name: "Lutsk",
//     state: "",
//     country: "UA",
//     coord: {
//       lon: 25.34244,
//       lat: 50.759319,
//     },
//   },
//   {
//     id: 7046809,
//     name: "Rivne",
//     state: "",
//     country: "UA",
//     coord: {
//       lon: 34.757729,
//       lat: 46.360168,
//     },
//   },
//   {
//     id: 706369,
//     name: "Khmelnytskyi",
//     state: "",
//     country: "UA",
//     coord: {
//       lon: 26.996531,
//       lat: 49.421612,
//     },
//   },
// ];
