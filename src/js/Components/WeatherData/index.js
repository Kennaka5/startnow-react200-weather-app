import { connect } from 'react-redux';
import WeatherData from './WeatherData';

function mapStoreToProps(store) {
    return {
      city: store.search.city,
      lat: store.search.lat,
      lon: store.search.lon,
      temperature: store.search.temperature,
      pressure: store.search.pressure,
      humidity: store.search.humidity,
      lowTemp: store.search.lowTemp,
      highTemp: store.search.highTemp,
      windspeed: store.search.windspeed,
    };
  }
export default connect(mapStoreToProps)(WeatherData);