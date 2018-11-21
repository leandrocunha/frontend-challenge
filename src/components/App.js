import React, { Component, Fragment } from 'react';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { getPlayer, random, result } from './../utils';
import Header from './Header';
import Modal from './Modal';
import Moves from './Moves';
import Restart from './Restart';
import Rounds from './Rounds';

/** Set default styles */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');
  
  ${reset}

  * { box-sizing: border-box; }

  body{
    background-color: #eef2f5;
    color: rgba(1, 22, 39, 0.8);
    font-family: 'Open Sans', sans-serif;
    line-height: 1.4;
  }

  strong { font-weight: 700; }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    /** Set state with default values.
     * @param {number} lastResult
     * @param {Array} rounds
     */
    this.state = { lastResult: 0, rounds: [] };

    /** Bind function to do one move. */
    this.play = this.play.bind(this);

    /** Bind function to start game. */
    this.start = this.start.bind(this);

    /** Set possibilities to play. */
    this.options = [-1, 0, 1];
  }

  componentDidMount() {
    /** Start game */
    this.start();
  }

  /**
   * @function start Start game setting a random initial value on local state.
   */
  start() {
    const initialValue = random(100);
    this.setState({ initialValue, lastResult: initialValue });
  }

  /**
   * @function round Build round push it to local state.
   * @param {number} player The number to represent the player that make the move.
   * @param {number} move The number that will be used in mathematical formula.
   * @param {number} result The number to be set as last result in local state.
   */
  round(player, move, result) {
    const round = {
      player,
      move,
      result,
      lastResult: this.state.lastResult
    };

    this.state.rounds.push(round);
    this.setState({ lastResult: result, round: this.state.round });
  }

  /**
   * @function play Pass one int possibility to get result an call round of the "bot" :)
   * @param {number} value The number of move to be calculated.
   */
  play(value) {
    const r = result(value, this.state.lastResult);
    this.round(1, value, r);

    setTimeout(() => {
      const value = this.options[random(3)];
      const r = result(value, this.state.lastResult);
      this.round(0, value, r);
    }, 1000);
  }

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Header player={getPlayer(this.state.rounds)} />
        <Rounds
          initialValue={this.state.initialValue}
          rounds={this.state.rounds}
        />
        {this.state.lastResult > 1 && <Moves move={this.play} />}
        {this.state.lastResult === 0 && <Restart />}
        {this.state.lastResult === 1 && <Modal />}
      </Fragment>
    );
  }
}

export default App;
