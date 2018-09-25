import IAction from '../IAction';

export default class QuoteAction {
    public static readonly ADD: string = 'QuoteAction.ADD';
    public static readonly REMOVE: string = 'QuoteAction.REMOVE';
    public static readonly GET_QUOTE: string = 'QuoteAction.GET_QUOTE';

    public static addQuote(quote: string): IAction<string> {
        return {
            error: true,
            meta: null,
            payload: quote,
            type: QuoteAction.ADD,
        };
    }

    public static removeQuote(quoteId: string): IAction<string> {
        return {
            payload: quoteId,
            type: QuoteAction.REMOVE,
        };
    }

    public static getQuote(): IAction<void> {
        return {
            type: QuoteAction.GET_QUOTE,
        };
    }
}
