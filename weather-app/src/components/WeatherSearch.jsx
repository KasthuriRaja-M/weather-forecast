import { useState } from 'react'
import { Search, Loader2 } from 'lucide-react'

const WeatherSearch = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim() && !loading) {
      onSearch(query)
    }
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter city name..."
            className="search-input"
            disabled={loading}
          />
          {loading && <Loader2 className="loading-icon" />}
        </div>
        <button 
          type="submit" 
          className="search-button"
          disabled={loading || !query.trim()}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </div>
  )
}

export default WeatherSearch