import React, { useState, useCallback } from 'react';
import ForecastList from './components/ForecastList';
import CitySearch from './components/CitySearch';
import fetchForecastData from './utils/apiUtils';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage'
import {errorInLoading, appTitle} from './utils/messages';

export default function App () {
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchForecast = useCallback(() => {
    fetchForecastData({city: search})
      .then((forecastData) => {
        setErrorMessage('');
        setLoading(false);    
        const {upcomingDays, cityName} = forecastData;
        setForecast(upcomingDays);
        setCity(cityName);
      }, (err) => {
        setErrorMessage(errorInLoading);
        setLoading(false);
      });
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchWeather = (e) => {
    e.preventDefault();
    fetchForecast();
  };

  return (
    <div className="weather-app-wrapper container">
      <h1>{appTitle}</h1>
      <CitySearch
        handleSearch={handleSearch}
        searchWeather={searchWeather}
        searchText={search}
      />
      {isLoading ? <Loader /> : ''}
      {
        errorMessage ? <ErrorMessage message={errorMessage} /> : 
        <ForecastList
          cityName={city}
          forecast={forecast}
        />
      }
    </div>
  );
}
