import * as React from 'react';
import posed, {PoseGroup} from 'react-pose';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {EASING} from '../../constants/easings';
import IAction from '../../stores/IAction';
import IStore from '../../stores/IStore';
import IQuote from '../../stores/quotes/models/IQuote';
import QuoteAction from '../../stores/quotes/QuoteAction';
import styles from './styles/quoteList.module.scss';

interface IState {}
interface IProps {}
interface IStateToProps {
    quotes: IQuote[];
}
interface IDispatchToProps {
    dispatch: (action: IAction<any>) => void;
}

const mapStateToProps = (state: IStore): IStateToProps => ({
    quotes: state.quoteReducer.quotes,
});
const mapDispatchToProps = (dispatch: Dispatch<IAction<any>>): IDispatchToProps => ({
    dispatch,
});

/* tslint:disable:variable-name */
const QuoteListItem: any = posed.div({
    enter: {
        opacity: 1,
        transformOrigin: '0 0',
        transition: {
            duration: 250,
            ease: EASING.OUT_CUBIC,
        },
        translateX: 0,
    },
    exit: {
        opacity: 0,
        transformOrigin: '0 0',
        transition: {
            duration: 300,
            ease: EASING.IN_CUBIC,
        },
        translateX: -50,
    },
    flip: {
        transition: {
            delay: 300,
            duration: 300,
            ease: EASING.IN_OUT_CUBIC,
        },
    }
});

class QuoteList extends React.Component<IStateToProps & IDispatchToProps & IProps, IState> {

    public render(): JSX.Element {
        const {quotes} = this.props;

        return (
            <PoseGroup animateOnMount={true}>
                {quotes.map((quote) => (
                    <QuoteListItem key={quote.id}>
                        <div className={styles.quote}
                            dangerouslySetInnerHTML={{ __html: quote.quote }}
                            onClick={this._onClickQuote.bind(this, quote.id)}
                        />
                    </QuoteListItem>
                ))}
            </PoseGroup>
        );
    }

    private _onClickQuote(quoteId: string): void {
        this.props.dispatch(QuoteAction.removeQuote(quoteId));
    }

}

export default connect<IStateToProps, IDispatchToProps, IProps>(mapStateToProps, mapDispatchToProps)(QuoteList);
