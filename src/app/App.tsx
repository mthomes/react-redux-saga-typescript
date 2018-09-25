import * as React from 'react';
import posed, {PoseGroup} from 'react-pose';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import IAction from '../stores/IAction';
import IStore from '../stores/IStore';
import IQuote from '../stores/quotes/models/IQuote';
import QuoteAction from '../stores/quotes/QuoteAction';
import {Button, Header, Quote} from './styles/AppStyles';

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
const ListItem: any = posed.div({
  enter: {
    opacity: 1,
    scale: 1,
    transformOrigin: '0 50%',
  },
  exit: {
    opacity: 0,
    scale: 0,
    transformOrigin: '0 50%',
  }
});

class App extends React.Component<IStateToProps & IDispatchToProps & IProps, IState> {
  public onClickButtonHandler = this._onClickButton.bind(this);

  public render(): JSX.Element {
    const {quotes} = this.props;

    return (
      <>
        <Header>
          <Button type="button" onClick={this.onClickButtonHandler}>Click to Get Norris</Button>
        </Header>
        <PoseGroup animateOnMount={true}>
          {quotes.map((quote) => (
            <ListItem key={quote.id}>
              <Quote onClick={this._onRemoveQuote.bind(this, quote.id)} dangerouslySetInnerHTML={{ __html: quote.quote }}/>
            </ListItem>
          ))}
        </PoseGroup>
      </>
    );
  }

  private _onClickButton(): void {
    this.props.dispatch(QuoteAction.getQuote());
  }

  private _onRemoveQuote(quoteId: string): void {
    this.props.dispatch(QuoteAction.removeQuote(quoteId));
  }
}

export default connect<IStateToProps, IDispatchToProps, IProps>(mapStateToProps, mapDispatchToProps)(App);
