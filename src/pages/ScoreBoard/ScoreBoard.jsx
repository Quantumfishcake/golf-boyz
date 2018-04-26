import React, { Component } from 'react';
import { range } from 'lodash';
import './ScoreBoard.css';
import { app, db } from '../Firebase'

/**
 * 
 * CRUD

  db.collection("rounds").add({
    courseId: 'XXXXX',
    scores: [{
      userId: 'Mss1ZzkgmMRUZPkY3ggm',
      holeScores: [0, 0, 2, 0, 0, 0, 0, 0, 0]
    }, {
      userId: 'nuuKKcFELwMNtIIQk0NW',
      holeScores: [0, 0, 2, 0, 0, 0, 0, 0, 0]
    }, {
      userId: 'HHfs8mVBxfbMzeRNclkI',
      holeScores: [0, 0, 2, 0, 0, 0, 0, 0, 0]
    }]
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })


 db.collection("rounds").add({
   courseId: 'XXXXX',
   scores: [{
     userId: 'Mss1ZzkgmMRUZPkY3ggm',
     holeScores: [0, 0, 2, 0, 0, 0, 0, 0, 0]
   }, {
     userId: 'nuuKKcFELwMNtIIQk0NW',
     holeScores: [0, 0, 2, 0, 0, 0, 0, 0, 0]
   }, {
     userId: 'HHfs8mVBxfbMzeRNclkI',
     holeScores: [0, 0, 2, 0, 0, 0, 0, 0, 0]
   }]
 })
 .then((docRef) => {
   console.log("Document written with ID: ", docRef.id);
 })
 
 db.collection("users").get().then((querySnapshot) => {
   querySnapshot.forEach((doc) => {
       console.log(doc);
   });
 });



const rounds = {
  courseId: 'XXXXX',
  scores: [{
    userId: 'Mss1ZzkgmMRUZPkY3ggm',
    holeScores: [0, 0, 2, 0, 0, 0, 0, 0, 0]
  }, {
    userId: 'nuuKKcFELwMNtIIQk0NW',
    holeScores: [0, 0, 2, 0, 0, 0, 0, 0, 0]
  }, {
    userId: 'HHfs8mVBxfbMzeRNclkI',
    holeScores: [0, 0, 2, 0, 0, 0, 0, 0, 0]
  }]
}

rounds.scores.find(score => score.userId === 'HHfs8mVBxfbMzeRNclkI').holeScores
[0, 0, 2, 0, 0, 0, 0, 0, 0]

----------------------

const goal = {
'Mss1ZzkgmMRUZPkY3ggm': [0, 0, 2, 0, 0, 0, 0, 0, 0],
'nuuKKcFELwMNtIIQk0NW': [0, 0, 0, 0, 0, 0, 0, 0, 0],
'HHfs8mVBxfbMzeRNclkI': [0, 0, 0, 0, 0, 0, 0, 0, 0],
}

const data1 = [{
  userId: 'Mss1ZzkgmMRUZPkY3ggm',
  holeScores: [0, 0, 2, 0, 0, 0, 0, 0, 0]
}, {
  userId: 'nuuKKcFELwMNtIIQk0NW',
  holeScores: [0, 0, 2, 0, 0, 0, 0, 0, 0]
}, {
  userId: 'HHfs8mVBxfbMzeRNclkI',
  holeScores: [0, 0, 2, 0, 0, 0, 0, 0, 0]
}]

const result = {}
data1.forEach(item => {
  result[item.userId] = item.holeScores
})

result === goal

*/



const numberOfHoles = 9;
const roundId = 'BD89oWIUTKmSnkxRRpOA';

const getInitials = (player) => player.firstName[0] + player.lastName[0];


class App extends Component {
  state = {
    players: [],
    round: {},
  }
  componentWillMount() {
    const { match: { params: { scoreId } } } = this.props;

    // Get the users
    db.collection("users").get().then((querySnapshot) => {
      this.setState({
        players: querySnapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
      })
    })
    // Get the rounds
    db.collection("rounds")
      .doc(scoreId)
      .onSnapshot((querySnapshot) => {
        const round = {
          id: querySnapshot.id,
          data: querySnapshot.data(),
        }
        this.setState({ round })      
      });
  }
  handleChange = (playerId, holeId, event) => {
    const { round } = this.state;
    const holeScores = round.data.scores.find(score => score.userId === playerId).holeScores;
    holeScores[holeId] = event.target.value;
    this.setState(this.state);
    db.collection("rounds").doc(roundId).set(round.data)
  }
  render = () => {
    const { players, round } = this.state;
    const holes = range(numberOfHoles);
    return (
      <div className="App">
        <table className="holeTable">
          <tbody>
            <tr>
              <th>Hole</th>
              { holes.map(hole => <th key={hole}>{ hole + 1}</th>)}

            </tr>
            { round && round.data && round.data.scores && round.data.scores.map(player => ( 
              <tr key={player.userId}>
                {/* <td>{ getInitials(players.find(x => x.id === player.userId)) }</td> */}
                <td>DR</td>
                { player.holeScores.map(hole => {
                  if (round.data) {
                    return (
                      <td key={hole}>
                        <input 
                          value={ [hole] } 
                          // className="hole" 
                          onChange={ (event) => this.handleChange(player.id, hole, event) }
                        />
                      </td>
                    )  
                  }
                })}
              </tr>
            )) }

            {/* { players.map(player => (
              <tr key={player.id}>
                <td>{ getInitials(player.data) }</td>
                { holes.map(hole => {
                  if (round.data) {
                    const holeScores = round.data.scores.find(score => score.userId === player.id).holeScores;
                    return (
                      <td key={hole}>
                        <input 
                          value={ holeScores[hole] } 
                          className="hole" 
                          onChange={ (event) => this.handleChange(player.id, hole, event) }
                        />
                      </td>
                    )  
                  }
                })}
              </tr>
            )) } */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
