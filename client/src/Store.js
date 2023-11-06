import { createStore, applyMiddleware } from "redux"; // Import as named exports
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootreducers from './components/redux/reducers/main.js'

const middleware = [thunk];

const store = createStore(
  rootreducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
