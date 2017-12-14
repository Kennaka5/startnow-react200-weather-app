import { combineReducers } from 'redux';
import searchReducer from './components/searchBar/searchReducer';
import weatherReducer from './components/weatherData/weatherReducer';

const rootReducer = combineReducers({
// add reducers
search: searchReducer,
});

export default rootReducer;
