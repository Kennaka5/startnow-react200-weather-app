import { combineReducers } from 'redux';
import searchReducer from './components/SearchBar/searchReducer';
import weatherReducer from './components/WeatherData/weatherReducer';

const rootReducer = combineReducers({
// add reducers
search: searchReducer,
});

export default rootReducer;
