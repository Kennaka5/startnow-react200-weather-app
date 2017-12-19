import React from 'react';
import SearchBar from './components/Searchbar';
import WeatherData from './components/WeatherData';
import WeatherHistory from './components/WeatherHistory';


export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3 text-center'>Origin Weather Application </h1>
          <p className='text-center'>Always know if you need an umbrella!</p>
        </div>
       <SearchBar />
        <div className='row pt-4'>
        <WeatherData />
            <div className='col-12 col-md-6 mb-4'>
              <div className='card-header'>Search History</div>
              <WeatherHistory />
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-6'>
            </div>
          </div>
        </div>
        );
  }
}
