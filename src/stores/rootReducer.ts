import IStore from './IStore';
import {combineReducers, Reducer, ReducersMapObject} from 'redux';
import QuoteReducer from './quotes/QuoteReducer';

const reducerMap: ReducersMapObject = {
    quoteReducer: QuoteReducer.reducer,
};

export default combineReducers(reducerMap) as Reducer<IStore>;
