import React from 'react';

export default class WeatherData extends React.Component {
    constructor(props) {
        super(props);
    }
render() {
  const {city, lon, lat, temperature, pressure, humidity, lowTemp, highTemp, windspeed} = this.props;
    return(
        <div className='col-md-6'>
        <div className='card-header'>City Information</div>
        <div className="card-block">
          <h4 className="card-title text-center">{city}</h4>
          <small className= "card-title text-center">{lon} {lat}</small>
          <div className= 'row text-center mx-auto pt-4'>
          <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h5 className="card-title">Temperature</h5>
                <p className="card-text">{temperature}</p>
              </div>
              </div>
              <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h5 className="card-title">Pressure</h5>
                <p className="card-text">{pressure}</p>
              </div>
              </div>
              <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h5 className="card-title">Humidity</h5>
                <p className="card-text">{humidity}</p>
              </div>
              </div>
              </div>
              <div className= 'row text-center mx-auto pt-4'>
          <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h5 className="card-title">Lowest Temp (F)</h5>
                <p className="card-text">{lowTemp}</p>
              </div>
              </div>
              <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h5 className="card-title">Highest Temp (F)</h5>
                <p className="card-text">{highTemp}</p>
              </div>
              </div>
              <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h5 className="card-title">Wind Speed</h5>
                <p className="card-text">{windspeed}</p>
              </div>
              </div>
              </div>
          </div>
        </div>
    );
}
}