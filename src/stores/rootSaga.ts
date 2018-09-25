import {all, ForkEffect, takeLatest} from 'redux-saga/effects';
import QuoteAction from './quotes/QuoteAction';
import QuoteSaga from './quotes/QuoteSaga';

export default function* rootSaga() {
    const filteredSagas: ForkEffect[] = [
        takeLatest(QuoteAction.GET_QUOTE, QuoteSaga.getQuote),
    ];

    yield all(filteredSagas);
}
