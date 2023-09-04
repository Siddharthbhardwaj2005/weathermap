function fetch_data()
{
    var x = document.getElementById('city1').value 
    console.log(x)
    if(x === "")
    {
        alert('Enter City Name')
    }
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+x+'&appid=fb8233e0dcf39dd5ed47a488ef139102&units=metric'
    fetch(url) 
    .then(response => response.json())
    .then(data=> { 
        var resp_code = data['cod']
        console.log(resp_code)
        if(resp_code === '404')
        {
            alert('City Not Found')

        }
        else 
        {
        var temperature = data['main']['temp']
        console.log(temperature)
        var icon = data['weather']['0']['icon']
        console.log(icon)
        var icon_url = 'https://openweathermap.org/img/wn/'+icon+'@2x.png'
        document.getElementById('result').innerHTML = `<img src=`+icon_url+`>` + `<br>` + `<h2> Temperature is: ` +  temperature + `Celsius <\h2>`
        }
    })
}