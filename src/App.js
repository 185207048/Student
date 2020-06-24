import React, { Component } from 'react';
import './App.css';
import Router from './routers/routes';
import {BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

class App extends Component {
  render() {
    return (  
      <div>
        <Provider>
          <BrowserRouter>
              <Router />
          </BrowserRouter>  
        </Provider>
      </div>
    );
  }
}
export default App;