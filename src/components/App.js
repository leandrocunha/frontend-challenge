import React, { Component, Fragment } from 'react';
import { getPlayer, result } from './../utils';
import Header from './Header';

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
      <div className="App">
        <Header player={getPlayer(this.state.rounds)} />
        <p>{this.state.initialValue}</p>
        <ul>
          {this.state.rounds.map((round, index) => (
            <li key={index}>
              {round.player}
              <br />
              {`[(${round.move} - ${round.lastResult}) / 3] = ${round.result}`}
            </li>
          ))}
        </ul>
        {this.state.lastResult > 1 && (
          <Fragment>
            <button onClick={() => this.play(-1)}>-1</button>
            <button onClick={() => this.play(0)}>0</button>
            <button onClick={() => this.play(1)}>1</button>
          </Fragment>
        )}

        {this.state.lastResult === 0 && (
          <button onClick={() => (window.location.href = '/')}>restart</button>
        )}

        {this.state.lastResult === 1 && (
          <p>{`Player ${
            this.state.rounds[this.state.rounds.length - 1].player
          } winner`}</p>
        )}
      </div>
    );
  }
}

export default App;
