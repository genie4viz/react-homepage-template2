import React, { Component } from 'react';
import SearchedItem from '../SearchedItem';
import Select from 'react-select';
import Toggle from "react-toggle-component";
import "react-toggle-component/styles.css";
import UserButton from '../UserButton';
import Roomate from '../Roomate';
import DateBox from '../DateBox';
import jsondata from '../../datas/data.json';
import './SearchBox.scss';

//options for select control
// By default no caret icon is supplied - any valid jsx markup will do
const caretIcon = (
    <svg className="caret-icon" style="color: #00ff00" x="0px" y="0px" width="11.848px" height="6.338px" viewBox="351.584 2118.292 11.848 6.338">
        <g><path d="M363.311,2118.414c-0.164-0.163-0.429-0.163-0.592,0l-5.205,5.216l-5.215-5.216c-0.163-0.163-0.429-0.163-0.592,0s-0.163,0.429,0,0.592l5.501,5.501c0.082,0.082,0.184,0.123,0.296,0.123c0.103,0,0.215-0.041,0.296-0.123l5.501-5.501C363.474,2118.843,363.474,2118.577,363.311,2118.414L363.311,2118.414z" /></g>
    </svg>
);

const cities = [
    { value: 'Barcelona Spain', label: 'Barcelona  Spain' },
    { value: 'Bari Italy', label: 'Bari  Italy' },
    { value: 'Santa Barbara', label: 'Santa  Barbara' },
    { value: 'Barmouth  United Kingdom', label: 'Barmouth  United Kingdom' }
];
const clients_nationality = [
    { value: 'United States', label: 'United States' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Spain', label: 'Spain' },
    { value: 'Norway', label: 'Norway' }
]
const select_styles = {
    container: (base) => ({ ...base, backgroundColor: '#ffffff' }),
    indicatorsContainer: (base) => ({ ...base, color: '#ffffff', backgroundColor: '#ffffff' }),
    valueContainer: (base) => ({ ...base, backgroundColor: '#ffffff', height: '50px', padding: 5 }),
    indicatorSeparator: (base) => ({ ...base, display: 'none' }),
    dropdownIndicator: (base) => ({ ...base, color: 'green' }),
    loadingIndicator: (base) => ({ ...base, color: 'green' }),
    placeholder: (base) => ({ ...base, fontSize: '0.9em', fontWeight: 400 })
};

class SearchBox extends Component {
    render() {
        const searchedItems = jsondata.map(
            info => (<SearchedItem
                key={info.id}
                location={info.location}
                rooms={info.rooms}
                paxs={info.paxs} />)
        );

        return (
            <div className="d-flex justify-content-center">
                <div className="card search-box col-sm-10">
                    <div className="card-body">
                        <h3 className="card-title"><strong>Search for Hotels</strong></h3>
                        <p className="grey-text">Recent searches</p>
                        <div className="d-flex justify-content-center">
                            {searchedItems}
                        </div>
                        <div className="search-criteria d-flex justify-content-center mt-4">
                            <div className="flex col-sm-6 flex-fill p-0 m-2">
                                <Select styles={select_styles} theme={(theme) => ({ ...theme, borderRadius: 0, colors: { ...theme.colors, primary: '#ddde' } })} placeholder={'Destinations...'} options={cities} />
                            </div>
                            <div className="flex col-sm-6 flex-fill p-0 m-2">
                                <DateBox />
                            </div>
                        </div>
                        <div className="search-criteria d-flex justify-content-center mt-4">
                            <div className="flex col-sm-6 flex-fill p-0 m-2">
                                <Roomate />
                            </div>
                            <div className="flex col-sm-6 flex-fill p-0 m-2">
                                <Select styles={select_styles} theme={(theme) => ({ ...theme, borderRadius: 0, colors: { ...theme.colors, primary: '#ddde' } })} placeholder={'Destinations...'} options={cities} />
                            </div>
                        </div>
                        <div className="search-criteria d-flex justify-content-center mt-4">
                            <div className="flex flex-fill m-2">
                                <Select styles={select_styles} theme={(theme) => ({ ...theme, borderRadius: 0, colors: { ...theme.colors, primary: '#ddde' } })} placeholder={'Destinations...'} options={cities} />
                            </div>
                            <div className="flex flex-fill m-2">
                                <Select styles={select_styles} theme={(theme) => ({ ...theme, borderRadius: 0, colors: { ...theme.colors, primary: '#ddde' } })} placeholder={'Clients Nationality'} options={clients_nationality} />
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-end mt-5 mr-2">
                            <Toggle labelRight="Show Special Offers Only" className="mr-4" />
                            <UserButton text={"Search Hotels"} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBox;