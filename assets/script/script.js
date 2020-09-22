
var searchResult = document.querySelector("#search-Bar");
var searches = [];

$(document).ready(function() {
 
   
    
    $("#searchBtn").on("click", function(event){
        event.preventDefault();
    
     // this is how and where the user input goes 
      var cityInput = $("#searchInput").val().trim();
     
      currentWeather(cityInput)
      forecast(cityInput);
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



})

