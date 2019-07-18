import React from 'react';
import ForecastTile from './ForecastTile';
import {showingWeatherLabel} from '../utils/messages';

export default function ForecastList({cityName, forecast}) {
    return (
        <div className="forecast-list-wrap container">
            {cityName ? 
                <div className="city-title row">{showingWeatherLabel} {cityName}</div> : ''
            } 
            <div className="forecast-tiles-wrap row">
                {forecast.map((dailyForecast, index) => {
                    const {weather, temp, temp_min, temp_max, dt_txt} = dailyForecast;
                    return (
                        <ForecastTile
                            weather={weather}
                            temp={temp}
                            temp_min={temp_min}
                            temp_max={temp_max}
                            dt_txt={dt_txt}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};
