import { connect } from 'react-redux';
import WeatherData from './WeatherHistory';

function mapStoreToProps(store) {
    return {
     historyListItem: store.search.historyListItem
    };
  }
export default connect(mapStoreToProps)(WeatherData);