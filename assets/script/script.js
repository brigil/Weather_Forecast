
var searchResult = document.querySelector("#search-Bar");
var quickCity = ["Orlando", "Tampa"];
var cityList = document.querySelector ("#city-results")
var citycountSpan = document.querySelector("#cityCount");
var searches = [];


$(document).ready(function() {
    renderquickCity();
  var cityBtns = document.getElementsByClassName("searchedCityBtn")

for(var i= 0; i < cityBtns.length; i++){
    cityBtns[i].addEventListener("click", function(event){
        console.log(event)
        console.log(event.target.innerText)
        let clickedBtnCity = event.target.innerText
        currentWeather(clickedBtnCity)
        forecast(clickedBtnCity);
        uv(clickedBtnCity);
    })
   
}
   
    $("#searchBtn").on("click", function(event){
        event.preventDefault();
    
      
      var cityInput = $("#searchInput").val().trim();
     
      currentWeather(cityInput)
      forecast(cityInput);
      uv(cityInput);
}) 

    

function currentWeather(city) {
    $.ajax({
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city + "&appid=223181d8c14eb6c00fd81347b8dbb451&units=imperial"

    }).then(function(currentWeather){
       console.log("current weather", currentWeather)

    })
    
}

function forecast(city) {
    $.ajax({
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" 
        + city + "&appid=223181d8c14eb6c00fd81347b8dbb451&units=imperial"

    }).then(function(fiveDayForeCast){
        console.log("fivedayforecast",fiveDayForeCast)

    })
    
}

function uv(city) {




    $.ajax({
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=8f63f215819badad4ad86bbbab862826&units=imperial"

    }).then(function (_uvStat) {
        console.log("uvstat", _uvStat)

    })
}





function renderquickCity() {

  cityList.innerHTML = "";
  citycountSpan.textContent = quickCity.length;

 
  for (var i = 0; i < quickCity.length; i++) {
    var cityPick = quickCity[i];

    var button = document.createElement("button");
    button.setAttribute("class", "searchedCityBtn")
    button.textContent = cityPick;
    cityList.appendChild(button);
  }
}






})
