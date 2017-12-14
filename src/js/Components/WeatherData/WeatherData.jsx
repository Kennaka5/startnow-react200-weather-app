import React from 'react';

export default class WeatherData extends React.Component {
    constructor(props) {
        super(props);
    }
render() {
    return(
        <div className='col-md-6'>
        <div className='card-header'>City Information</div>
        <div className="card-block">
          <h4 className="card-title text-center">Tokyo</h4>
          <div className= 'row text-center mx-auto pt-4'>
          <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h5 className="card-title">Temperature</h5>
                <p className="card-text">Some</p>
              </div>
              </div>
              <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h5 className="card-title">Pressure</h5>
                <p className="card-text">Some</p>
              </div>
              </div>
              <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h5 className="card-title">Humidity</h5>
                <p className="card-text">Some</p>
              </div>
              </div>
              </div>
              <div className= 'row text-center mx-auto pt-4'>
          <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h5 className="card-title">Temperature</h5>
                <p className="card-text">Some</p>
              </div>
              </div>
              <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h5 className="card-title">Pressure</h5>
                <p className="card-text">Some</p>
              </div>
              </div>
              <div className="card col-sm-3 mx-auto">
              <div className="card-block">
                <h5 className="card-title">Humidity</h5>
                <p className="card-text">Some</p>
              </div>
              </div>
              </div>
          </div>
        </div>
    );
}
}