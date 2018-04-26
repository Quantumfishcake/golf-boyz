import React, { Component } from 'react';
import { app, db } from '../Firebase'
import { range } from 'lodash';
import { Link } from 'react-router-dom'

class Rounds extends Component {
    state = {
      rounds: [],
    }
    componentWillMount() {

        db.collection("rounds").get().then((querySnapshot) => {
            const rounds = querySnapshot.docs.map(doc => ({
              id: doc.id,
              data: doc.data(),
            }))
      
            this.setState({
              rounds,
            })
           // console.log(round.data())
          })
          
    }
    

    render = () => {
        console.log(this.state.round)
         return (
            <div>
                <h1>Rounds</h1>
                { this.state.rounds.map(round => (
                    <Link key={ round.id } to={`/score/${ round.id }`}>
                        {round.data.courseId}
                    </Link>
                ))}
            
            
            </div>
            
        );
        
    }
}


export default Rounds;


