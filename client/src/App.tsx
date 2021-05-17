import React, {useContext, useEffect} from 'react';
import {Switch, Route} from "react-router-dom";

// Context
import {CC_USER} from "./context/ContextUser";
import {CC_PRODUCTS} from "./context/ContextProducts";

// Components
import Header from "./components/header/Header";

// Views
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Category from "./views/Category";
import Profile from "./views/Profile";
import ChangePassword from "./views/ChangePassword";
import ProductCategoryList from "./views/ProductCategoryList";
import WishList from "./views/WishList";
import Bag from "./views/Bag";
import ProductInfo from "./views/ProductInfo";

// Routes
import RouteAuth from "./routes/RouteAuth.routes";

const App = () => {

  const {isAuthenticated} = useContext(CC_USER);
  const {getProducts} = useContext(CC_PRODUCTS);

  useEffect(() => {
    getProducts();
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
      <Route exact path="/wishlist" component={WishList}/>
      <Route exact path="/profile/change-password" component={ChangePassword}/>
      <Route exact path="/category/:category" component={ProductCategoryList}/>
      <Route exact path="/bag" component={Bag}/>
      <Route exact path="/product/:id" component={ProductInfo}/>
      
      <RouteAuth exact path="/sign-in" component={Login} />
      <RouteAuth exact path="/sign-up" component={Register}/>
      
    </Switch>
    </div>
    </>
  )
};

export default App;
