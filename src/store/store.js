import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { BlogReducer } from "../Reducer/UserReducer";
import createSagaMiddleware from 'redux-saga';
import UserSaga from "../saga/UserSaga";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    BlogReducer,
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(UserSaga);



export default store;
