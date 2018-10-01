import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import IAction from '../stores/IAction';
import QuoteAction from '../stores/quotes/QuoteAction';
import QuoteList from '../components/quoteList';

import styles from './styles/app.module.scss';

interface IState {}
interface IProps {}
interface IStateToProps {}
interface IDispatchToProps {
    dispatch: (action: IAction<any>) => void;
}

const mapStateToProps = (): IStateToProps => ({});
const mapDispatchToProps = (dispatch: Dispatch<IAction<any>>): IDispatchToProps => ({
    dispatch,
});

class App extends React.Component<IStateToProps & IDispatchToProps & IProps, IState> {
  public onClickButtonHandler = this._onClickButton.bind(this);

  public render(): JSX.Element {
    return (
      <>
        <div className={styles.header}>
          <button
            className={styles.button}
            type="button"
            onClick={this.onClickButtonHandler}
          >
            Click to Get Norris
          </button>
        </div>
        <QuoteList />
      </>
    );
  }

  private _onClickButton(): void {
    this.props.dispatch(QuoteAction.getQuote());
  }
}

export default connect<IStateToProps, IDispatchToProps, IProps>(mapStateToProps, mapDispatchToProps)(App);
