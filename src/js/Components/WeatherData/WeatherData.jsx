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
          <p className= 'card-text text-center'>
          <small> {`Lat: ${lat}, Lon: ${lon}`}</small>
          </p>
          <div className= 'row text-center mx-auto pt-4'>
          <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h6 className="card-title pt-2">Temperature</h6>
                <p className="card-text">{temperature}</p>
              </div>
              </div>
              <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h6 className="card-title pt-2">Pressure</h6>
                <p className="card-text">{pressure}</p>
              </div>
              </div>
              <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h6 className="card-title pt-2">Humidity</h6>
                <p className="card-text">{humidity}</p>
              </div>
              </div>
              </div>
              <div className= 'row text-center mx-auto pt-4'>
          <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h6 className="card-title pt-2">Lowest Temp (F)</h6>
                <p className="card-text">{lowTemp}</p>
              </div>
              </div>
              <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h6 className="card-title pt-2">Highest Temp (F)</h6>
                <p className="card-text">{highTemp}</p>
              </div>
              </div>
              <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h6 className="card-title pt-2">Wind Speed</h6>
                <p className="card-text">{windspeed}</p>
              </div>
              </div>
              </div>
          </div>
        </div>
    );
}
}