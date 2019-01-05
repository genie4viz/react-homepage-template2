// @flow
import React from 'react';
import './UserButton.scss';
import imgSearch from '../../static/icons/search.png';

const UserButton = (props) => {
  const { text, onClick } = props;  
  return (
    <div className="user-button d-flex align-items-center pl-5 pr-5 pt-3 pb-3" onClick={onClick}>
      <div className="text">
        <span>{text}</span>        
      </div>
      <img src={imgSearch} height="15" alt="search-oval" />
    </div>
  );
};

export default UserButton;
