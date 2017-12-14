import { connect } from 'react-redux';
import SearchBar from './SearchBar';

//Adding React-redux, and mapStore to props connects the whole thing

function mapStoreToProps(store) {
    return {
      city: store.search.selectedCity
    };
  }

  export default connect(mapStoreToProps)(SearchBar);