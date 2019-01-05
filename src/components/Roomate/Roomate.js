import React, { Component } from 'react';
import Select from 'react-select';
import './Roomate.scss';

//select style
const select_styles= { 
  container: (base) => ({ ...base,  backgroundColor:' rgb(255, 255, 255)', height:'49px' }), 
  valueContainer: (base) => ({ ...base, backgroundColor:' rgb(255, 255, 255)',  height:'49px'}), 
  indicatorSeparator: (base) => ({ ...base, display:'none' }), 
  indicatorsContainer: (base) => ({ ...base, backgroundColor:' rgb(255, 255, 255)' }), 
  dropdownIndicator: (base) => ({ ...base, color:'green' }), 
  loadingIndicator: (base) => ({ ...base, color:'green' }),  
  placeholder: (base) => ({ ...base,  fontSize: '1em', fontWeight: 400 }) };
  
  const numbers = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
  ]
class Roomate extends Component {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const { selectedOption } = this.state;
    
    // const listLocations = jsondata.map(
    //   info => (<SearchedItem
    //     key={info.id}
    //     location={info.location}
    //     rooms={info.rooms}
    //     paxs={info.paxs} />)
    // );
    return (
      <div className="roomate-panel d-flex flex-row justify-content-between align-items-center">
        <div className="roomate-room">Room1</div>
        <div className="roomate-adults">Number of Adults</div>
        <div className="rommate-adults-dropdown d-flex align-items-stretch"><Select placeholder={'1'} styles={select_styles} theme={(theme) => ({...theme, borderRadius: 0, colors: {...theme.colors, primary: '#ddde'}})} defaultValue={'1'} options={numbers}/></div>
        <div className="roomate-children">Number of Children</div>
        <div className="rommate-children-dropdown d-flex align-items-stretch p-0 m-0"><Select placeholder={'1'} styles={select_styles} theme={(theme) => ({...theme, borderRadius: 0, colors: {...theme.colors, primary: '#ddde'}})} defaultValue={'1'} options={numbers}/></div>
      </div>
    );
  }
}

export default Roomate;
