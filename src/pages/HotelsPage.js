import React, { Component } from 'react';
import imgIntro from '../static/images/intro.png';
import '../pages/HotelsPage.css';
import SavedSearchBoxContainer from '../containers/SavedSearchBoxContainer';
import SearchBoxContainer from '../containers/SearchBoxContainer';

class HotelsPage extends Component {
    render() {
        return (
            <div className="hotels-container">
                <div className="d-flex justify-content-center">
                    <img src={imgIntro} className="img-fluid intro" alt="" />
                </div>
                <SearchBoxContainer />
                <SavedSearchBoxContainer />
            </div>
        );
    }
}

export default HotelsPage;