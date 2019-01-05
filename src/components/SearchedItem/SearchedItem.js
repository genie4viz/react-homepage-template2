import React, { Component } from 'react';
import './SearchedItem.scss';
import bodyIcon from '../../static/icons/body.png';
import keyIcon from '../../static/icons/key.png';
import arrowIcon from '../../static/icons/remove.png';

class SearchedItem extends Component {

    render() {
        const { location, rooms, paxs } = this.props;
        return (
            <div className="searched-item card flex-fill p-3 mr-2 ml-2">
                <div className="d-flex justify-content-between">
                    <div className="flex"><p className="h6"><strong>{location}</strong></p></div>
                    <div className="flex"><img src={arrowIcon} className="arrow" height="15" alt="" /></div>
                </div>
                <div className="d-flex">
                    <div className="mr-2"><img src={bodyIcon} height="15" style={{ marginRight: 5 }} alt="" />{rooms} room</div>
                    <div className="paxs"><img src={keyIcon} height="15" style={{ marginRight: 5 }} alt="" />{paxs} pax</div>
                </div>
            </div>
        );
    }
}

export default SearchedItem;