import React from 'react';
import { Provider } from "react-redux"
import './App.css';
import store from './store';
import Routers from "./router/router"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  );
}

export default App;
