import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Contextprovider from './components/context/ContextProvider'; // Import the Contextprovider component

ReactDOM.render(
  <Contextprovider> {/* Use the Contextprovider component */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Contextprovider>,
  document.getElementById('root')
);

reportWebVitals();
