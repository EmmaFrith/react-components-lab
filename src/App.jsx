import './App.css'
import WeatherForecast from './components/WeatherForecast';

// level up:
// import WeatherIcon from './components/WeatherIcon';
// import WeatherData from './components/WeatherData';

const App = () => {

  const weatherForecasts = [
    {
      day: 'Mon',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ];

  return (
    <>
      <h1>Local Weather</h1>
      <section>
        {weatherForecasts.map((weatherForecast, index) => {
          return <WeatherForecast
            key={index}
            day={weatherForecast.day}
            img={weatherForecast.img}
            imgAlt={weatherForecast.imgAlt}
            conditions={weatherForecast.conditions}
            time={weatherForecast.time}
          />


    //level up:

          // <>
          //   <h1>Weather Icon</h1>
          //   <section>
          //     {weatherForecasts.map((weatherForecast, index) => {
          //       return <WeatherIcon
          //         key={index}
          //         img={weatherForecast.img}
          //         imgAlt={weatherForecast.imgAlt}
          //       />


          // <>
          //   <h1>Weather Data</h1>
          //   <section>
          //     {weatherForecasts.map((weatherForecast, index) => {
          //       return <WeatherData
          //         key={index}
          //         day={weatherForecast.day}
          //         conditions={weatherForecast.conditions}
          //         time={weatherForecast.time}
          //       />


        })}
      </section>
    </>

  );
}

export default App



