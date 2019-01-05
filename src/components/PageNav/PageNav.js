import React from 'react';
import './PageNav.scss';


const PageNav = () => {
  return (
    <div className="d-flex justify-content-between page-nav">
      <div className="per-page">
        <span className="mr-3 light-color">Items per page</span>
        <span className="mr-2 strong-color">3</span>
        <span className="green-color">></span>
      </div>

      <div className="d-flex justify-content-between pagination">
        <span className="green-color">></span>
        <span className="strong-color selected">1</span>
        <span className="light-color">2</span>
        <span className="light-color">3</span>
        <span>...</span>
        <span className="green-color">></span>
      </div>
    </div>
  );
};

export default PageNav;
