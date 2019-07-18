import {API_KEY, UNITS, WEATHER_API, COUNT} from './apiConsts';
import axios from 'axios';
import dataTransformer from './dataTransformer';

const fetchForecastData = async ({city}) => {
    const url = `${WEATHER_API}/forecast?q=${city}&cnt=${COUNT}&APPID=${API_KEY}&units=${UNITS}`;
    try{
        const forecastData = await axios.get(url);
        const forecast = dataTransformer(forecastData)
        return forecast;
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
};

export default fetchForecastData;