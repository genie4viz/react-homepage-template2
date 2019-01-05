import React, { Component } from 'react';
import AppTemplate from './AppTemplate';
import MainContainer from '../containers/MainContainer';
import RightbarContainer from '../containers/RightbarContainer';

class App extends Component {
  render() {
    return (
      <AppTemplate
        main={<MainContainer />}
        rightbar={<RightbarContainer />}
      />
    );
  }
}

export default App;