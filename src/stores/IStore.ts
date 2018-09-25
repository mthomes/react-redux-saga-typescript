import IQuoteReducerState from './quotes/models/IQuoteReducerState';

export default interface IStore {
    readonly quoteReducer: IQuoteReducerState;
}
