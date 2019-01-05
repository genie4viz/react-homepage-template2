import React from 'react';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './static/fonts/font.css';

const Root = () => {

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Root;