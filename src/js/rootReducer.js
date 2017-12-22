import { combineReducers } from 'redux';
import searchReducer from './Components/SearchBar/searchReducer';
import weatherReducer from './Components/WeatherData/weatherReducer';

const rootReducer = combineReducers({
// add reducers
search: searchReducer,
});

export default rootReducer;
