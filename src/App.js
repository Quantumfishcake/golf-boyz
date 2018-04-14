import React, { Component } from 'react';
import { range } from 'lodash';
import './App.css';

const players = [{
  id: '1',
  firstName: 'Tom',
  lastName: 'Quant'
}, {
  id: '2',
  firstName: 'Jan',
  lastName: 'Stedry'
}, {
  id: '3',
  firstName: 'Rob',
  lastName: 'Bird'
}, {
  id: '4',
  firstName: 'David',
  lastName: 'Revay'
}];

const numberOfHoles = 9;

const getInitials = (player) => player.firstName[0] + player.lastName[0];

// for (let i = 0; i < numberOfHoles; i++) {
//       console.log(i);
// }

 //{ players.map(player => <div key={player.id}>{player.firstName}</div>) }


class App extends Component {
  constructor() {
    super();
    this.state = {
      game: {
        '1': [0, 0, 2, 0, 0, 0, 0, 0, 0],
        '2': [0, 0, 0, 0, 0, 0, 0, 0, 0],
        '3': [0, 0, 0, 0, 0, 9, 0, 0, 0],
        '4': [0, 1, 2, 0, 0, 0, 0, 0, 0],
      }
    }
  }
  handleChange = (playerId, holeId) => (event) => {
    this.state.game[playerId][holeId] = parseInt(event.target.value);
    this.setState(this.state);
    console.log(this.state.game);
  }
  render = () => {
    const holes = range(numberOfHoles);
    console.log(this.state);
    return (
      <div className="App">
        <table className="holeTable">
          <tbody>
            <tr>
              <th>Hole</th>
              { holes.map(hole => <th key={hole}>{ hole + 1}</th>)}

            </tr>
            { players.map(player => (
              <tr key={player.id}>
                <td>{ getInitials(player) }</td>
                { holes.map(hole => (
                  <td key={hole}>
                    <input 
                      value={ this.state.game[player.id][hole] } 
                      className="hole" 
                      onChange={ this.handleChange(player.id, hole) }
                    />
                  </td>
                ))}
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
