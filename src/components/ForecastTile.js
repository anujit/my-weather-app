import React from 'react';
import {IMAGE_URL} from '../utils/apiConsts';
import {conditionLabel} from '../utils/messages';

export default function ForecastTile ({weather, temp, temp_min, temp_max, dt_txt}) {
    const date = new Date(dt_txt);
    const hours = date.getHours();
    let minutes = date.getMinutes().toString();
    minutes = minutes.length === 1 ? '0'+ minutes : minutes;

    const weatherCondition = weather[0];
    const {description, icon} = weatherCondition;

    return (
        <div className="card" style={{width: '15rem'}}>
            <div className="card-header">{date.toLocaleDateString()} - {hours}:{minutes}</div>
            <div className="card-body">
                <div className='weather-icon'>
                    <img src={`${IMAGE_URL}${icon}@2x.png`} />
                </div>
                <p className="weather-condition">{conditionLabel} {description}</p>
                <div className="temp-wrap">
                    <div className="current-temp-wrap">
                        <div className="current-temp">{temp}</div>
                        <span className="min-temp">{temp_min}<sup>&#8451;</sup></span>
                        <span className="max-temp">{temp_max}<sup>&#8451;</sup></span>
                    </div>
                </div>
            </div>
        </div>
    )
}