async function checkWeatherdelhi() {
    city = document.getElementsByTagName("input")[0].value
    var currentdate = new Date();
    var date = currentdate.getDate() + "/"+ (currentdate.getMonth() + 1) + "/"+currentdate.getFullYear()
    var time = currentdate.getHours() + ":"+( currentdate.getMinutes()<"10"?"0"+currentdate.getMinutes():currentdate.getMinutes());
    document.getElementsByClassName("date-time-city")[0].children[1].innerHTML = `<h3>${date}</h3>`
    document.getElementsByClassName("date-time-city")[0].children[3].innerHTML = `<h3>${time}</h3>`

    const apiKey = "378603cebc014f298d5164956232702";
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=378603cebc014f298d5164956232702&q=delhi&days=7&aqi=no&alerts=no`;
    const response = await fetch(apiUrl + '&appid=$(apiKey)');
    var data = await response.json();


    document.getElementsByClassName("city_name")[0].innerHTML = data.location.name + "<h4>(default)</h4>"

    
    let icon1 = data.forecast.forecastday[0].day.condition.icon
    document.getElementsByClassName("card-text")[0].children[0].innerHTML =
        `${Math.round(data.forecast.forecastday[0].day.avgtemp_c)}°C<img height="175px" src="${icon1}">`
    document.getElementsByClassName("card-text")[0].children[1].innerHTML =
        `${data.forecast.forecastday[0].day.avghumidity}%</br><img height="50px" width="50px" src="humidity.png">`
    document.getElementsByClassName("card-text")[0].children[2].innerHTML =
        `${data.forecast.forecastday[0].day.maxwind_kph}km/hr</br><img height="50px" width="50px" src="wind.png">`
    document.getElementsByClassName("card-text")[0].children[3].innerHTML =
        `<h2>${data.forecast.forecastday[0].day.condition.text}</h2>`


    let i = 1
    while (i < 7) {
        let icon = data.forecast.forecastday[i].day.condition.icon
        document.getElementsByClassName("card-text")[i].children[0].innerHTML =
            `${Math.round(data.forecast.forecastday[i].day.avgtemp_c)}°C<img height="100px" src="${icon}">`
        document.getElementsByClassName("card-text")[i].children[1].innerHTML =
            `${data.forecast.forecastday[i].day.avghumidity}%</br><img height="50px" width="50px" src="humidity.png">`
        document.getElementsByClassName("card-text")[i].children[2].innerHTML =
            `${data.forecast.forecastday[i].day.maxwind_kph}km/hr</br><img height="50px" width="50px" src="wind.png">`
        document.getElementsByClassName("card-text")[i].children[3].innerHTML =
            `<h4>${data.forecast.forecastday[i].day.condition.text}</h4>`
    
        i = i + 1
    }

}

checkWeatherdelhi()


async function checkWeather() {
    try{

        document.querySelector(".date-time-city").children[0].style.display="none"  
        document.querySelector(".date-time-city").children[1].style.display="block"            
        document.querySelector(".date-time-city").children[2].style.display="block"            
        document.querySelector(".date-time-city").children[3].style.display="block"
        document.querySelector(".container").style.display="grid"     

        let city = document.getElementsByTagName("input")[0].value
        var currentdate = new Date();
        var date = currentdate.getDate() + "/"+ (currentdate.getMonth() + 1) + "/"+currentdate.getFullYear()
        var time = currentdate.getHours() + ":"+ ( currentdate.getMinutes()<"10"?"0"+currentdate.getMinutes():currentdate.getMinutes());
        document.getElementsByClassName("date-time-city")[0].children[1].innerHTML = `<h3>${date}</h3>`
        document.getElementsByClassName("date-time-city")[0].children[3].innerHTML = `<h3>${time}</h3>`
    
        const apiKey = "8e6f0751c14c44785f4eb8dbb8b1e664";
        const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=8e6f0751c14c44785f4eb8dbb8b1e664&units=metric`;
        const response = await fetch(apiUrl + '&appid=$(apiKey)');
  
        
        var data = await response.json();
    
        
        document.getElementsByClassName("city_name")[0].innerHTML = data.city.name 
        let icon = `${data.list[0].weather[0].icon}`
        document.getElementsByClassName("card-text")[0].children[0].innerHTML =
            `${Math.round(data.list[0].main.temp)}°C<img height="175px" src="http://openweathermap.org/img/w/${icon}.png">`
        document.getElementsByClassName("card-text")[0].children[1].innerHTML =
            `${data.list[0].main.humidity}%</br><img height="50px" width="50px" src="humidity.png">`
        document.getElementsByClassName("card-text")[0].children[2].innerHTML =
            `${data.list[0].wind.speed}km/hr</br><img height="50px" width="50px" src="wind.png">`
        document.getElementsByClassName("card-text")[0].children[3].innerHTML =
            `<h2>${data.list[0].weather[0].description}</h2>`
    
    
        let i = 1
        while (i < 5) {
            let icon = `${data.list[i].weather[0].icon}`
            document.getElementsByClassName("card-text")[i].children[0].innerHTML =
                `${Math.round(data.list[i].main.temp)}°C<img height="100px" src="http://openweathermap.org/img/w/${icon}.png">`
            document.getElementsByClassName("card-text")[i].children[1].innerHTML =
                `${data.list[i].main.humidity}%</br><img height="50px" width="50px" src="humidity.png">`
            document.getElementsByClassName("card-text")[i].children[2].innerHTML =
                `${data.list[i].wind.speed}km/hr</br><img height="50px" width="50px" src="wind.png">`
            document.getElementsByClassName("card-text")[i].children[3].innerHTML =
                `<h4>${data.list[i].weather[0].description}</h4>`
            i = i + 1
        }
    }catch(err){
            document.querySelector(".date-time-city").children[0].style.display="block"            
            document.querySelector(".date-time-city").children[1].style.display="none"            
            document.querySelector(".date-time-city").children[2].style.display="none"            
            document.querySelector(".date-time-city").children[3].style.display="none"          
            document.querySelector(".container").style.display="none"   
    }
    
   
}

scroll = () => {
    window.scrollTo(0, 300)
}

const searchbutton = document.querySelector(".searchbutton")
searchbutton.addEventListener("click", checkWeather)
searchbutton.addEventListener("click", scroll)