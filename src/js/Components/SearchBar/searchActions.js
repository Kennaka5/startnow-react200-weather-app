import axios from 'axios';

//create keys for different action types
export const types = {
    CITY_TO_SEARCH: 'CITY_TO_SEARCH',
    WEATHER_INFO: 'WEATHER_INFO',
    CITY_INPUT_TO_SEARCH: 'CITY_INPUT_TO_SEARCH',
    WEATHER_INFO_FULFILLED: 'WEATHER_INFO_FULFILLED'
}

//Actions

export function citySelected(selectedCity){
    return {
        type: types.CITY_TO_SEARCH,
        payload: { selectedCity }
    };
}

export function cityManualInput(cityInput){
    return {
        type: types.CITY_INPUT_TO_SEARCH,
        payload: { cityInput }
    };
}

export function getWeather(cities) {
    return {
    type: types.WEATHER_INFO,
    payload: axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + cities + '&units=imperial&appid=9199fd021744ff989f39d43c85783b5e')
    .then((r) => { 
        return r.data;
    })
    .catch((err) => { 
        console.log(err)
        })}
}
