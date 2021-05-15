import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import {BrowserRouter} from "react-router-dom";

// Context Component
import {ContextUser} from "./context/ContextUser";
import {ContextProducts} from "./context/ContextProducts";

ReactDOM.render(
  <BrowserRouter>
    <ContextProducts>
      <ContextUser>

        <App/>

      </ContextUser>
    </ContextProducts>
    
  </BrowserRouter>,
  document.getElementById('root')
);
