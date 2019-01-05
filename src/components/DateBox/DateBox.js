import React, { Component } from 'react';
import './DateBox.scss';

class DateBox extends Component {
  
  render() {
    return (
      <div className="datebox-container flex-row d-flex align-items-center justify-content-between pl-2 pr-2">
        <div className="checkin-pane d-flex">
          <div className="text-color-black mr-2">Check in</div>
          <div className="label-startdate text-color-green">2018-03-15
          
          </div>
        </div>
        <div className="datecontrol-pane d-flex align-items-center">
          <div className="text-color-black mr-2">Nights:</div>
          <div className="date-controller mr-2">-</div>
          3
          <div className="date-controller ml-2">+</div>
        </div>
        <div className="checkout-pane d-flex">
          <div className="text-color-black mr-2">Check out</div>
          <div className="label-enddate text-color-green">2018-09-15
            
          </div>
        </div>
      </div>
    );
  }
}

export default DateBox;