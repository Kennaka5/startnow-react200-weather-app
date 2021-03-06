import React from 'react';

export default class WeatherHistory extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {historyListItem} = this.props;
          return(
              <ol className='pl-0'>
                {!!this.props.historyListItem && this.props.historyListItem.map((history, index) =>
                <li key={index} className="list-group-item">
                <div className="row justify-content-between">
                <div className="col-4">
                <div className="text-left">{history.city}</div>
                </div>
                <div className="col-4">
                <div className="text-right">{history.date}</div>
                <div className="text-right">{history.time}</div>
                </div>
                </div> 
                </li>
                )}
              </ol>
          )}
        }