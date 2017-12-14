import {
  types
} from './searchActions';


const defaultState = {
  city: '',
  lon: '',
  lat: '',
  tempature: '',
  lowTemp: '',
  pressure: '',
  humidity: '',
  highTemp: '',
  windspeed: '',
  preSelectedCity: false
};

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;
  // the `state = defaultState` above is new ES6 syntax
  // for defining a default value on a parameter
  switch (type) {
    case types.CITY_TO_SEARCH:
      {
        // we'll return an object
        return {
          // with all the previous state
          ...state,
          // but overwriting the description
          city: payload.selectedCity
        }
      }
      switch (type) {
    case types.WEATHER_INFO:
       }
      return {
        ...state,
        city: payload.data.name,
        lat: payload.data.coord.lat,
        lon: payload.data.coord.lon,
        temp: payload.data.main.temp + 'F',
        pressure: payload.data.main.humidity,
        humidity: payload.data.main.humidity + '%',
        lowTemp: payload.data.main.temp_min + 'F',
        highTemp: payload.data.main.temp_max + 'F',
        wind: payload.data.wind.speed + 'mph',        
      }
  default: {
    return state;
  }
}
}
