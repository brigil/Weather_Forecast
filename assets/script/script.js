
var searchResult = document.querySelector("#search-Bar");
var quickCity = ["Orlando", "Tampa"];
var cityList = document.querySelector ("#city-results")
var citycountSpan = document.querySelector("#cityCount");
var searches = [];


$(document).ready(function() {
 
    
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

    }).then(function(_resource){
       

    })
    
}

function forecast(city) {
    $.ajax({
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" 
        + city + "&appid=223181d8c14eb6c00fd81347b8dbb451&units=imperial"

    }).then(function(_resource){
        console.log(_resource)

    })
    
}

function uv(city) {




    $.ajax({
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=8f63f215819badad4ad86bbbab862826&units=imperial"

    }).then(function (_uvStat) {


    })
}






})
