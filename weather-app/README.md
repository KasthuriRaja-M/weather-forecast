# Weather Forecast Application

A beautiful, modern weather forecast application built with React and Vite. Get real-time weather information for any city around the world with a stunning UI and responsive design.

## Features

- 🌍 **Search Any City**: Search for weather information by city name
- 🌤️ **Current Weather**: Display current temperature, conditions, and detailed weather information
- 📅 **5-Day Forecast**: View weather predictions for the next 5 days
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Beautiful gradient backgrounds and glass-morphism design
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds

## Weather Information Displayed

### Current Weather
- Temperature (current, feels like, min/max)
- Weather conditions with emoji icons
- Humidity percentage
- Wind speed
- Visibility
- Last updated timestamp

### 5-Day Forecast
- Daily weather predictions
- High and low temperatures
- Weather conditions
- Humidity levels

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. **Important**: Get your API key from [OpenWeatherMap](https://openweathermap.org/api):
   - Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/api)
   - Get your API key from your account dashboard
   - Replace `'YOUR_API_KEY'` in `src/App.jsx` with your actual API key

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## API Configuration

The application uses the OpenWeatherMap API. To configure it:

1. Open `src/App.jsx`
2. Find the line: `const API_KEY = 'YOUR_API_KEY'`
3. Replace `'YOUR_API_KEY'` with your actual OpenWeatherMap API key

```javascript
const API_KEY = 'your_actual_api_key_here'
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icon library
- **CSS3** - Modern styling with gradients and animations
- **OpenWeatherMap API** - Weather data provider

## Project Structure

```
src/
├── components/
│   ├── WeatherSearch.jsx      # Search input component
│   ├── CurrentWeather.jsx     # Current weather display
│   └── WeatherForecast.jsx    # 5-day forecast display
├── App.jsx                    # Main application component
├── App.css                    # Main styles
├── index.css                  # Global styles
└── main.jsx                   # Application entry point
```

## Customization

### Styling
The application uses modern CSS with:
- CSS Grid and Flexbox for layouts
- CSS Custom Properties for theming
- Backdrop filters for glass-morphism effects
- Smooth animations and transitions

### Adding Features
You can easily extend the application by:
- Adding more weather details
- Implementing location-based weather
- Adding weather alerts
- Including weather maps
- Adding unit conversion (Celsius/Fahrenheit)

## Browser Support

The application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## Support

If you encounter any issues or have questions:
1. Check the browser console for error messages
2. Verify your API key is correctly configured
3. Ensure you have a stable internet connection
4. Check if the OpenWeatherMap API is accessible

---

**Note**: The free tier of OpenWeatherMap API has rate limits. For production use, consider upgrading to a paid plan.
