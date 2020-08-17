import React from 'react';
import { Provider } from "react-redux"
import './App.css';
import store from './store';
import Routers from "./router/router"
import Header from "./components/Header"

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header />
        <Routers />
      </React.Fragment>
    </Provider>
  );
}

export default App;
