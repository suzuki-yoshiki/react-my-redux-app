import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from "@reduxjs/toolkit";
// import { applyMiddleware } from "redux";
// import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index';
import reportWebVitals from './reportWebVitals';
// import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />,
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  // <Provider store={store}>
  //   <EventsIndex />
  // </Provider>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
reportWebVitals();
