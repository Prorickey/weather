import React from 'react';

type WeatherItemProps = {
    icon: string;
    description: string;
    value: number | string;
}

type WeatherTodayProps = {
    location: string;
    feels_like: number;
    data: {
        high_temp: WeatherItemProps;
        low_temp: WeatherItemProps;
        humidity: WeatherItemProps;
        wind_speed: WeatherItemProps;
        wind_direction: WeatherItemProps;
        dew_point: WeatherItemProps;
        pressure: WeatherItemProps;
        visibility: WeatherItemProps;
        uv_index: WeatherItemProps;
        moon_phase: WeatherItemProps;
    };
}

const WeatherItem = ({icon, description, value}: WeatherItemProps) => {
    return (
        <div>
            <img src={icon} alt={description} />
            <p>{description}</p>
            <h3>{value}</h3>
        </div>
    )
};

const WeatherToday = ({location, feels_like, data}: WeatherTodayProps) => {
    return (
        <div className="weather-today">
            <h2>Weather Today in {location} </h2>
            <div>
                <p>Feels Like</p>
                <h3>{feels_like}°F</h3>
            </div>
            <div>
                {Object.entries(data).map(([key, {icon, description, value}]) => ( WeatherItem({icon, description, value}) ))}
            </div>
        </div>
    );
};

export default WeatherToday;