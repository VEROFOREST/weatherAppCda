import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import forecastReducer from './reducers/forecastReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export default createStore(forecastReducer, composeEnhancers(applyMiddleware(thunk)));