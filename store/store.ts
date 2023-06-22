import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import apiReducer from './apiReducer';

const appReducers = combineReducers({
    apiReducer,
});

const rootReducer = (state: any, action: any) => appReducers(state, action);

export const store = createStore(rootReducer, applyMiddleware(thunk));