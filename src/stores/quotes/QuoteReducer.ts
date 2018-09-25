import QuoteAction from './QuoteAction';
import IAction from '../IAction';
import IQuoteReducerState from './models/IQuoteReducerState';
import IQuote from './models/IQuote';
import {randomWordString} from '../../utilities/stringUtilities';

export default class QuoteReducer {

    private static readonly _initialState: IQuoteReducerState = {
        quotes: [],
    };

    public static reducer(state: IQuoteReducerState = QuoteReducer._initialState, action: IAction<any>): IQuoteReducerState {
        switch (action.type) {
            case QuoteAction.ADD:
                return QuoteReducer._addQuote(state, action);
            case QuoteAction.REMOVE:
                return QuoteReducer._removeQuote(state, action);
            default:
                return state;
        }
    }

    private static _addQuote(state: IQuoteReducerState, action: IAction<string>): IQuoteReducerState {
        const quote: IQuote = {
            id: randomWordString(true),
            quote: action.payload,
        };

        return {
            ...state,
            quotes: [
                ...state.quotes,
                quote,
            ],
        };
    }

    private static _removeQuote(state: IQuoteReducerState, action: IAction<string>): IQuoteReducerState {
        const quoteId: string = action.payload;

        return {
            ...state,
            quotes: state.quotes.filter((quote: IQuote) => quote.id !== quoteId),
        };
    }

}
