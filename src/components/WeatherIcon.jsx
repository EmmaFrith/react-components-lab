import '../WeatherForecast.css'

function WeatherIcon( { img, imgAlt }) {

return (

<div className="weather">
  <img src={img} alt={imgAlt} />
</div>

)

}


export default WeatherIcon