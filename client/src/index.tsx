import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import {BrowserRouter} from "react-router-dom";

// Context Component
import {ContextUser} from "./context/ContextUser";

ReactDOM.render(
  <BrowserRouter>
    <ContextUser>

      <App/>
      
    </ContextUser>
  </BrowserRouter>,
  document.getElementById('root')
);
