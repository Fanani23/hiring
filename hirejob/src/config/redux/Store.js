import { applyMiddleware, createStore } from 'redux'
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducers from './Reducers';


const Store = createStore(rootReducers, applyMiddleware(logger, thunk))


export default Store