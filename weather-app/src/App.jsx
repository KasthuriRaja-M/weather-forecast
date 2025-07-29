import { useState, useEffect } from 'react'
import './App.css'
import WeatherSearch from './components/WeatherSearch'
import CurrentWeather from './components/CurrentWeather'
import WeatherForecast from './components/WeatherForecast'
import { Search, MapPin } from 'lucide-react'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [location, setLocation] = useState('')

  const API_KEY = 'YOUR_API_KEY' // Replace with your OpenWeatherMap API key
  const BASE_URL = 'https://api.openweathermap.org/data/2.5'

  const fetchWeatherData = async (city) => {
    setLoading(true)
    setError(null)
    
    try {
      // Fetch current weather
      const weatherResponse = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      
      if (!weatherResponse.ok) {
        throw new Error('City not found')
      }
      
      const weather = await weatherResponse.json()
      setWeatherData(weather)
      
      // Fetch 5-day forecast
      const forecastResponse = await fetch(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
      )
      
      if (forecastResponse.ok) {
        const forecast = await forecastResponse.json()
        setForecastData(forecast)
      }
      
      setLocation(city)
    } catch (err) {
      setError(err.message)
      setWeatherData(null)
      setForecastData(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (city) => {
    if (city.trim()) {
      fetchWeatherData(city.trim())
    }
  }

  return (
    <>
      <div className="animated-bg" />
      <div className="app">
        <div className="container">
          <header className="header">
            <div className="logo">
              <Search className="logo-icon" />
              <h1>Weather Forecast</h1>
            </div>
            <p className="subtitle">Get real-time weather information for any city</p>
          </header>

          <WeatherSearch onSearch={handleSearch} loading={loading} />

          {error && (
            <div className="error">
              <p>{error}</p>
            </div>
          )}

          {weatherData && (
            <div className="weather-content">
              <CurrentWeather data={weatherData} location={location} />
              {forecastData && <WeatherForecast data={forecastData} />}
            </div>
          )}

          {!weatherData && !loading && !error && (
            <div className="welcome">
              <MapPin className="welcome-icon" />
              <h2>Welcome to Weather Forecast</h2>
              <p>Search for a city to get started</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
