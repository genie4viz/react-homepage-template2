import React from 'react';
import './SavedSearchBox.css';

const SavedSearchBox = ({ children }) => {
    //const { onChange, onClick } = props;
    return (
        <div className="d-flex savedsearch-box justify-content-center mt-5 mb-5">
            <div className="card col-sm-10">
                <div className="card-body">
                    <h3 className="card-title pt-3 pb-3"><strong>Saved searches</strong></h3>
                    <div className="flex justify-content-center">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SavedSearchBox;