import React from 'react';
import './SavedSearchItem.scss';

import search_icon from '../../static/images/icons8-search-24.png';
import moon_icon from '../../static/images/icons8-moon-symbol-30.png';
import delete_icon from '../../static/images/icons8-remove-30(1).png';

const SavedSearchItem = ({data}) => {
  const { board_type, clients, features, from, location, nationality, price, room_type, to, category } = data;
  return (
    <div className="d-flex justify-content-between saved_item strong-color pt-4 pb-1">

      <div className="d-flex ">
        <div className="w-50px">
          <img src={search_icon} alt={'search'} className={'search-ico'} />
        </div>
        <div>
          <div className="fs-20">{location}</div>
          <div>{price}</div>
        </div>
      </div>

      <div className="d-flex">
        <div className="mr-4">
          <div className="light-color">From:</div>
          <div>{from}</div>
        </div>

        <div className="mr-4">
          <div className="light-color">&nbsp;</div>
          <div>
            <img src={moon_icon} alt={'moon'} className={'moon-ico'} /> 1 Night
          </div>
        </div>

        <div>
          <div className="light-color">To:</div>
          <div>{to}</div>
        </div>
      </div>

      <div>
        <div><span className="light-color">Clients: </span>{clients}</div>
        <div><span className="light-color">Clients nationality: </span>{nationality}</div>
        <div><span className="light-color">Room type: </span>{room_type}</div>
      </div>

      <div>
        <div><span className="light-color">Board type: </span>{board_type}</div>
        <div><span className="light-color">Category: </span>{category}</div>
        <div><span className="light-color">Features: </span>{features}</div>
      </div>

      <div className="row-ctrl-pnl">
        <div>See results ></div>
        <div className="d-flex align-items-center">
          <img src={delete_icon} alt={'moon'} className={'del-ico'} />
          Delete
        </div>
      </div>
    </div>
  );
};

export default SavedSearchItem;
