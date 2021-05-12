import React from 'react';
import {Switch, Route} from "react-router-dom";

// Components
import Header from "./components/header/Header";

// Views
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Category from "./views/Category";

const App = () => {
  return (
    <>
    <Header/>
    <div className="content">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/sign-in" component={Login}/>
      <Route exact path="/sign-up" component={Register}/>
      <Route exact path="/category" component={Category}/>
    </Switch>
    </div>
    </>
  )
};

export default App;
