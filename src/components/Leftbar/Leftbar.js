import React, { Component } from 'react';
import './Leftbar.css';

class Leftbar extends Component {
    render() {
      return (
        <div className="leftbar-container flex-row m-3">
          <div className="issue-title">Better Tour</div>
          <div className="issue-item d-flex justify-content-between mt-3 pb-3 bottom-lined ">
            <div className="item-name">Person</div>
            <div className="item-value">Aaron Spencer</div>
          </div>
          <div className="issue-item d-flex justify-content-between mt-3 pb-3 bottom-lined ">
            <div className="item-name">Markup</div>
            <div className="item-value">Net Price</div>
          </div>
          <div className="issue-item d-flex justify-content-between mt-3 pb-3 bottom-lined ">
            <div className="item-name">Bookings</div>
            <div className="item-value">7</div>
          </div>
          <div className="issue-item d-flex justify-content-between mt-3 pb-3">
            <div className="item-name">Wallet</div>
            <div className="item-value">$0.00</div>
          </div>
          <div className="issue-item d-flex justify-content-between mt-5 pb-3 bottom-lined">
            <div className="item-value">Settings</div>
            <div className="item-value text-color-green">></div>
          </div>
          <div className="issue-item d-flex justify-content-between mt-3 pb-3">
            <div className="item-value">Log out</div>
            <div className="item-value text-color-green">></div>
          </div>
        </div>
      );
    }
  }
  
  export default Leftbar;