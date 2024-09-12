import { combineReducers, legacy_createStore } from 'redux';
import themeReducer from './../theme/themereducer';
import { counterReducer } from './counterReducer';

const rootReducer = combineReducers({
    theme: themeReducer,
    counter: counterReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
