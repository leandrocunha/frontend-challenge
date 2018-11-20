import React, { Component, Fragment } from 'react';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { getPlayer, result } from './../utils';
import Header from './Header';
import Moves from './Moves';

/** Set default styles */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');
  
  ${reset}

  * {
    box-sizing: border-box;
  }

  body{
    background-color: #eef2f5;
    color: rgba(1, 22, 39, 0.8);
    font-family: 'Open Sans', sans-serif;
    line-height: 1.4;
  }

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
    this.state = { rounds: [] };
    this.play = this.play.bind(this);
    this.start = this.start.bind(this);
    this.options = [-1, 0, 1];
  }

  componentDidMount() {
    this.start();
  }

  random(limit) {
    return Math.floor(Math.random() * limit);
  }

  start() {
    const initialValue = this.random(100);
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
      const value = this.options[this.random(3)];
      const r = result(value, this.state.lastResult);
      this.round(0, value, r);
    }, 1000);
  }

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Header player={getPlayer(this.state.rounds)} />
        <div>
          <p>{this.state.initialValue}</p>
          <ul>
            {this.state.rounds.map((round, index) => (
              <li key={index}>
                {round.player}
                <br />
                {`[(${round.move} - ${round.lastResult}) / 3] = ${
                  round.result
                }`}
              </li>
            ))}
          </ul>
        </div>
        {this.state.lastResult > 1 && <Moves move={this.play} />}

        {this.state.lastResult === 0 && (
          <button onClick={() => (window.location.href = '/')}>restart</button>
        )}

        {this.state.lastResult === 1 && (
          <p>{`Player ${
            this.state.rounds[this.state.rounds.length - 1].player
          } winner`}</p>
        )}
      </Fragment>
    );
  }
}

export default App;
