import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import imgIntro from '../static/images/intro.png';
import '../pages/HotelsPage.css';
import SavedSearchBoxContainer from '../containers/SavedSearchBoxContainer';

class HotelsPage extends Component {
    render() {
        return (
            <div className="hotels-container">
                <div className="d-flex justify-content-center">
                    <img src={imgIntro} className="img-fluid intro" alt="" />
                </div>
                <SearchBox />
                <SavedSearchBoxContainer />
            </div>
        );
    }
}

export default HotelsPage;