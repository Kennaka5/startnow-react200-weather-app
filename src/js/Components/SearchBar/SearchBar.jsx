import React from 'react';

//import action export functions
import { citySelected, getWeather } from './searchActions';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.HandleCitySelect = this.HandleCitySelect.bind(this);
        this.HandleWeatherInfo = this.HandleWeatherInfo.bind(this);
    }

    HandleCitySelect(e) {
        const { dispatch } = this.props
        const { value } = e.target;
        console.log(value)
        dispatch(citySelected(value))
    }

    HandleWeatherInfo(e) {
        const { dispatch } = this.props
        const { value } = e.target;
        dispatch(getWeather(value))
        console.log(value)
    }

    render() {
        const selectedCity = this.props.selectedCity
        return (
            <div>
            <button 
            className='btn btn-info' 
            value='San Diego'
            onClick={ this.HandleCitySelect }
            >San Diego</button>
            <button 
            className='btn btn-info' 
            value='New York'
            onClick={ this.HandleCitySelect }
            >New York</button>
            <button 
            className='btn btn-info' 
            value='Washington D.C.'
            onClick={ this.HandleCitySelect }
            >Washington D.C.</button>
            <button 
            className='btn btn-info' 
            value='London'
            onClick={this.HandleCitySelect}
            >London</button>
            <button 
            className='btn btn-info' 
            value='Tokyo'
            onClick={ this.HandleCitySelect}
            >Tokyo</button>                        
    <div className='input-group'>
    <input 
        type="text" 
        id="user" 
        className="form-control"
    />
    <button
        onChange={ this.HandleWeatherInfo }
    >Check</button>
    </div>
    </div>
    );
    }
}