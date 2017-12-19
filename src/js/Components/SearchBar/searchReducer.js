import { types } from './searchActions';

const defaultState = {
  city: '',
  lon: '',
  lat: '',
  temperature: '',
  lowTemp: '',
  pressure: '',
  humidity: '',
  highTemp: '',
  windspeed: '',
  historyListItem: [],
  preSelectedCity: false,
  cityInput: ''
};

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;
  // the `state = defaultState` above is new ES6 syntax
  // for defining a default value on a parameter
  switch (type) {
    case types.CITY_TO_SEARCH:
        // we'll return an object
        return {
          // with all the previous state
          ...state,
          // but overwriting the description
          city: payload.selectedCity
        }
    case types.CITY_INPUT_TO_SEARCH:
        // we'll return an object
        return {
          // with all the previous state
          ...state,
          // but overwriting the description
          cityInput: payload.cityInput
        }

    
    case `${types.WEATHER_INFO}_PENDING`:
        console.log('pending');
        return {
          ...state
        }

    case `${types.WEATHER_INFO}_FULFILLED`:
    //console log here to debug
        const { historyListItem } = state;
        var date = new Date();
        var history = {
          city: payload.name,
          date: date.toLocaleDateString(), 
          time: date.toLocaleTimeString()
        };
        if (historyListItem) {
          const newHistory = history;
          history = state.historyListItem.slice();
          history.push(newHistory);
        }



      return {
          ...state, 
          city: payload.name,
          lat: payload.coord.lat,
          lon: payload.coord.lon,
          temperature: payload.main.temp + 'F',
          pressure: payload.main.pressure,
          humidity: payload.main.humidity + '%',
          lowTemp: payload.main.temp_min + 'F',
          highTemp: payload.main.temp_max + 'F',
          windspeed: payload.wind.speed + 'mph',
          historyListItem: history,
      }
  default: {
    return state;
  }
}
}
