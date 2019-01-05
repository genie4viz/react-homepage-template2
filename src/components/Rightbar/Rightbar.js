import React, { Component } from 'react';
import imgAlarm from '../../static/images/alarm.png';
import './Rightbar.css';

class Rightbar extends Component {
    render() {
      return (
        <div className="rightbar-container">
            <div className="alarm d-flex align-items-center justify-content-center">
              <img src={imgAlarm} alt="" />
            </div>
            <div className="lang d-flex align-items-center justify-content-center">EN</div>
            <div className="cash d-flex align-items-center justify-content-center">$</div>
        </div>
      );
    }
  }
  
  export default Rightbar;