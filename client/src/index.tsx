import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import {BrowserRouter} from "react-router-dom";

// Context Component
import {ContextUser} from "./context/ContextUser";
import {ContextProducts} from "./context/ContextProducts";
import {ContextOrder} from "./context/ContextOrder";

ReactDOM.render(
  <BrowserRouter>
    <ContextProducts>
      <ContextUser>
        <ContextOrder>

          <App/>

        </ContextOrder>
      </ContextUser>
    </ContextProducts>
    
  </BrowserRouter>,
  document.getElementById('root')
);
