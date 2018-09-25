import QuoteAction from '../quotes/QuoteAction';
import {call, put} from 'redux-saga/effects';
import IAction from '../IAction';
import {get} from 'lodash-es';
import QuoteService from './QuoteService';

export default class QuoteSaga {
    public static* getQuote(action: IAction<void> = null) {
        try {
            const response: any = yield call(QuoteService.getNorris);
            const joke: string = get(response, 'data.value.joke');

            if (joke) {
                yield put(QuoteAction.addQuote(joke));
            }
        } catch (error) {
            yield put(QuoteAction.addQuote('Chuck Norris did not respond!'));
        }
    }
}
