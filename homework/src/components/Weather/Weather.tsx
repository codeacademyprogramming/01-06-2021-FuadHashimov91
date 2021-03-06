import React, { useState, useEffect } from 'react';
import getWeatherData from '../../data/weatherApi';
import SearchWeather from './SearchWeather';
import WeatherList from './WeatherLIst';

const Weather = () => {
    const [weatherData, setWeatherData]:any = useState(null);
    const [city, setCity]:any = useState("Baku");
    const [weather, setWeather]:any = useState();


    const getData = async () => {
        try {
            const data = await getWeatherData(city);
            setWeatherData(data);

            result(data);
        }
        catch (error) {
            console.log(error.message);
        }
    }

    const result =(data:object)=>{
        console.log(data);
    }

    const convertKelvin = () => {
        setWeather(weatherData.main.temp)
    }

    const convertCelcius = () => {
        setWeather((weatherData.main.temp - 273.15).toFixed(2))
    }

    const convertFahrenheit = () => {
        setWeather(((weatherData.main.temp - 273.15) * 9 / 5 + 32).toFixed(4))
    }

    const handleDelete = () => {
        setWeatherData(null);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <h1 className='text-center m-5' id='head'>Weather App</h1>
            <SearchWeather setCity={setCity} getData={getData} />
            <WeatherList
                weatherData={weatherData}
                weather={weather}
                convertFahrenheit={convertFahrenheit}
                convertCelcius={convertCelcius}
                convertKelvin={convertKelvin}
                handleDelete={handleDelete}
            />
        </>
    )
}

export default Weather;