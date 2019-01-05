import React from 'react';
import './AppTemplate.css';

const AppTemplate = ({ main, rightbar }) => {
    return (
        <div className="app-template d-flex flex-row ">
            <div className="maincontent w-100">{main}</div>
            <div className="rightbar flex-shrink-1">{rightbar}</div>
        </div>
    );
};

export default AppTemplate;