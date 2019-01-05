import React, { Component } from 'react';
import SavedSearchBox from '../components/SavedSearchBox';
import SavedSearchItem from '../components/SavedSearchItem';
import PageNav from '../components/PageNav';

class SavedSearchBoxContainer extends Component {  
  constructor (props) {
    super(props);
    this.state = {
      rows: [
        {
          location: 'France paris',
          price: '€300 - €400',
          from : '2019-05-05',
          to: '2019-06-05',
          clients: '2 Adults, 1 Child',
          nationality: 'Lithuania',
          room_type: '-',
          board_type: 'Breakfast',
          category: 'All',
          features: '-'
        },
        {
          location: 'France paris',
          price: '€300 - €400',
          from : '2019-05-05',
          to: '2019-06-05',
          clients: '2 Adults, 1 Child',
          nationality: 'Lithuania',
          room_type: '-',
          board_type: 'Breakfast',
          Catcategory: 'All',
          features: '-'
        },
        {
          location: 'France paris',
          price: '€300 - €400',
          from : '2019-05-05',
          to: '2019-06-05',
          clients: '2 Adults, 1 Child',
          nationality: 'Lithuania',
          room_type: '-',
          board_type: 'Breakfast',
          Catcategory: 'All',
          features: '-'
        }
      ]
    }
  }

  render() {
    const  { rows } = this.state;
    return (
      <SavedSearchBox>
        {
          rows.map((item, i) => {
            return <SavedSearchItem key={`saved-item-${i}`} data={item} />
          })
        }

        <div className="pt-5 pb-5">
          <PageNav />
        </div>
      </SavedSearchBox>
    );
  }
}

export default SavedSearchBoxContainer;
