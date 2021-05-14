import React, {useContext, useEffect} from 'react';
import {Switch, Route} from "react-router-dom";

// Context
import {CC_USER} from "./context/ContextUser";

// Components
import Header from "./components/header/Header";

// Views
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Category from "./views/Category";
import Profile from "./views/Profile";
import ChangePassword from "./views/ChangePassword";

// Routes
import RouteAuth from "./routes/RouteAuth.routes";

const App = () => {

  const {isAuthenticated} = useContext(CC_USER);

  useEffect(() => {
    isAuthenticated();

    // eslint-disable-next-line
  }, [])

  return (
    <>
    <Header/>
    <div className="content">
    <Switch>

      <Route exact path="/" component={Home}/>
      <Route exact path="/category" component={Category}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/profile/change-password" component={ChangePassword}/>
      
      <RouteAuth exact path="/sign-in" component={Login} />
      <RouteAuth exact path="/sign-up" component={Register}/>
      
    </Switch>
    </div>
    </>
  )
};

export default App;
