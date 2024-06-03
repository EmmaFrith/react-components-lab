import '../WeatherForecast.css'

function WeatherData( { day, conditions, time }) {

return (

<div className="weather">
<h2>{day}</h2>
  <p><span>conditions: </span>{conditions}</p>
  <p><span>time: </span>{time}</p>
</div>

)

}


export default WeatherData