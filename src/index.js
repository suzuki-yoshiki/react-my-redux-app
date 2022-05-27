import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
// import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import reportWebVitals from './reportWebVitals';
// import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route exact path="/events/new" component={EventsNew} />
      <Route exact path="/events/new" component={EventsIndex}/>
    </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
reportWebVitals();
