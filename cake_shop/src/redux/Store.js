import { createStore, applyMiddleware } from "redux";
// npm install --save redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./RootReducer";
import logger from "redux-logger"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store