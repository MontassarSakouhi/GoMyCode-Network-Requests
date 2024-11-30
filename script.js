document.querySelector('#btn').addEventListener('click',()=>{
    const input=document.querySelector('#input').value
    const weather=document.querySelector('#weather')
    const temp=document.querySelector('#temp')
    const clouds=document.querySelector('#clouds')
    const humidity=document.querySelector('#humidity')
    const name=document.querySelector('#name')
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=...&units=metric`
   


    fetch(api)
    .then(response => response.json())
    .then(data => {console.log(data)
 
        name.innerHTML= `Name: ${data.name}`;
        weather.innerHTML = `Weather: ${data.weather[0].description}`;
        temp.innerHTML = `Temperature: ${data.main.temp} °C`;
        clouds.innerHTML = `Clouds: ${data.clouds.all}%`;
        humidity.innerHTML = `Humidity: ${data.main.humidity}%`

    })
    
    // weather.innerHTML=
    

})