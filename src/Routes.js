import React from "react";
import { Route, Switch } from "react-router-dom";

// Customize Page
import HotelsPage from "./pages/HotelsPage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/hotels" component={HotelsPage} />
        
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
