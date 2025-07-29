import { MapPin, Thermometer, Droplets, Wind, Eye } from 'lucide-react'

const CurrentWeather = ({ data, location }) => {
  const getWeatherIcon = (weatherCode) => {
    // Map weather codes to emoji icons
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

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  return (
    <div className="current-weather">
      <div className="weather-header">
        <div className="location">
          <MapPin className="location-icon" />
          <h2>{location}</h2>
        </div>
        <div className="weather-icon">
          {getWeatherIcon(data.weather[0].id)}
        </div>
      </div>

      <div className="weather-main">
        <div className="temperature">
          <span className="temp-value">{Math.round(data.main.temp)}°</span>
          <span className="temp-unit">C</span>
        </div>
        <div className="weather-description">
          {data.weather[0].description}
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <Thermometer className="detail-icon" />
          <div className="detail-content">
            <span className="detail-label">Feels like</span>
            <span className="detail-value">{Math.round(data.main.feels_like)}°C</span>
          </div>
        </div>

        <div className="detail-item">
          <Droplets className="detail-icon" />
          <div className="detail-content">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{data.main.humidity}%</span>
          </div>
        </div>

        <div className="detail-item">
          <Wind className="detail-icon" />
          <div className="detail-content">
            <span className="detail-label">Wind</span>
            <span className="detail-value">{Math.round(data.wind.speed)} m/s</span>
          </div>
        </div>

        <div className="detail-item">
          <Eye className="detail-icon" />
          <div className="detail-content">
            <span className="detail-label">Visibility</span>
            <span className="detail-value">{(data.visibility / 1000).toFixed(1)} km</span>
          </div>
        </div>
      </div>

      <div className="weather-footer">
        <div className="temp-range">
          <span className="temp-min">Min: {Math.round(data.main.temp_min)}°C</span>
          <span className="temp-max">Max: {Math.round(data.main.temp_max)}°C</span>
        </div>
        <div className="last-updated">
          Last updated: {formatTime(data.dt)}
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather 