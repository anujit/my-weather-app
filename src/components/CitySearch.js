import React from 'react';
import {getWeatherLabel} from '../utils/messages';

export default function CitySearch({handleSearch, searchWeather, searchText}){
    return (
        <div className="city-search-container row">
            <form className="form-inline" onSubmit={e => searchWeather(e)}>
                <div className="form-group mx-sm-3 mb-2">
                    <input 
                        type="text" 
                        id="search" 
                        className="form-control"
                        placeholder="Enter City"
                        onChange={(e) => handleSearch(e)}
                    />                
                </div>
                <button 
                    type="submit"
                    disabled={!searchText}
                    className="btn btn-primary mb-2">{getWeatherLabel}</button>
            </form>
        </div>
    );
}