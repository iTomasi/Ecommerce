import React from 'react';
import {Switch, Route} from "react-router-dom";

// Components
import Header from "./components/header/Header";

// Views
import Home from "./views/Home";

const App = () => {
  return (
    <>
    <Header/>
    <div className="content">
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
    </div>
    </>
  )
};

export default App;
