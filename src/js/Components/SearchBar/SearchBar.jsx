import React from 'react';

//import action export functions
import { citySelected, getWeather, cityManualInput } from './searchActions';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.HandleCitySelect = this.HandleCitySelect.bind(this);
        this.HandleWeatherInfo = this.HandleWeatherInfo.bind(this);
        this.HandleCityInput =this.HandleCityInput.bind(this);
    }

    HandleCityInput(e){
        const {dispatch} = this.props
        const {value} = e.target;
        console.log('HandleCityInput', value)
        dispatch(cityManualInput(value))
    }

    HandleCitySelect(e) {
        const { dispatch } = this.props
        const preCity = e.target.id;
        dispatch(getWeather(preCity))
    }

    HandleWeatherInfo(e) {
        const { cityInput, dispatch } = this.props;
        dispatch(getWeather(cityInput));
    }

    render() {
        const selectedCity = this.props
        console.log('render', selectedCity)
        return (
            <div>
                <button
                    id="san%20diego"
                    className='btn btn-info'
                    value='San Diego'
                    onClick={this.HandleCitySelect}
                >San Diego</button>
                <button
                    id="new%20york"
                    className='btn btn-info'
                    value='New York'
                    onClick={this.HandleCitySelect}
                >New York</button>
                <button
                    id="district%20of%20columbia"
                    className='btn btn-info'
                    value='Washington D.C.'
                    onClick={this.HandleCitySelect}
                >Washington D.C.</button>
                <button
                    id="london"
                    className='btn btn-info'
                    value='London'
                    onClick={this.HandleCitySelect}
                >London</button>
                <button
                    id="tokyo"
                    className='btn btn-info'
                    value='Tokyo'
                    onClick={this.HandleCitySelect}
                >Tokyo</button>
                <div className='input-group'>
                    <input
                        type="text"
                        id="user"
                        className="form-control"
                        onChange={this.HandleCityInput}
                    />
                    <button
                        onClick={this.HandleWeatherInfo}
                    >Go</button>
                </div>
            </div>
        );
    }
}