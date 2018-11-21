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
    this.state = { lastResult: 0, rounds: [] };
    this.play = this.play.bind(this);
    this.start = this.start.bind(this);
    this.options = [-1, 0, 1];
  }

  componentDidMount() {
    this.start();
  }

  start() {
    const initialValue = random(100);
    this.setState({ initialValue, lastResult: initialValue });
  }

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
