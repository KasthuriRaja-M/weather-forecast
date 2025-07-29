import { Calendar, Thermometer, Droplets } from 'lucide-react'

const WeatherForecast = ({ data }) => {
  const getWeatherIcon = (weatherCode) => {
    const weatherIcons = {
      '01': '☀️', // clear sky
      '02': '⛅', // few clouds
      '03': '☁️', // scattered clouds
      '04': '☁️', // broken clouds
      '09': '🌧️', // shower rain
      '10': '🌦️', // rain
      '11': '⛈️', // thunderstorm
      '13': '🌨️', // snow
      '50': '🌫️', // mist
    }
    
    const code = weatherCode.toString().substring(0, 2)
    return weatherIcons[code] || '🌤️'
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })
  }

  // Group forecast data by day and get the forecast for 12:00 PM each day
  const dailyForecasts = data.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000)
    const dayKey = date.toDateString()
    
    // Get forecast for around 12:00 PM (noon)
    const hour = date.getHours()
    if (hour >= 11 && hour <= 13) {
      if (!acc[dayKey]) {
        acc[dayKey] = item
      }
    }
    
    return acc
  }, {})

  const forecastDays = Object.values(dailyForecasts).slice(0, 5)

  return (
    <div className="weather-forecast">
      <div className="forecast-header">
        <Calendar className="forecast-icon" />
        <h3>5-Day Forecast</h3>
      </div>
      
      <div className="forecast-container">
        {forecastDays.map((day, index) => (
          <div key={index} className="forecast-day">
            <div className="forecast-date">
              {formatDate(day.dt)}
            </div>
            
            <div className="forecast-icon-large">
              {getWeatherIcon(day.weather[0].id)}
            </div>
            
            <div className="forecast-description">
              {day.weather[0].description}
            </div>
            
            <div className="forecast-temp">
              <div className="temp-high">
                <Thermometer className="temp-icon" />
                <span>{Math.round(day.main.temp_max)}°</span>
              </div>
              <div className="temp-low">
                <span>{Math.round(day.main.temp_min)}°</span>
              </div>
            </div>
            
            <div className="forecast-humidity">
              <Droplets className="humidity-icon" />
              <span>{day.main.humidity}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherForecast