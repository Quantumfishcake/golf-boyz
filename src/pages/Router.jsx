import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom'

import Header from '../components/Header/Header'
import Home from './Home/Home'
import Login from './Login/Login'
import ScoreBoard from './ScoreBoard/ScoreBoard'
import Rounds from './Rounds/Rounds'
import { auth } from 'firebase'
import { newRound } from '../features/rounds/utils'

export default class Router extends Component {
  state = {
    user: {},
  }
  componentWillMount() {
    auth().onAuthStateChanged((user) => {
      this.setState({ user: user || {} })
    });    
  }
  authedRoutes() {
    return (
      <div>
        <Route path="/score/:scoreId" component={ScoreBoard}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rounds" component={Rounds}/>
      </div>
    )
  }
  unAuthedRoutes() {
    return (
      <div>
        <Route exact path="/login" component={Login}/>
      </div>
    )
  }
  
  render() {
    const { user } = this.state
    return (
      <BrowserRouter>
        <div>
          <Header user={ user } newRound={ () => newRound({ userId: user.uid, numHoles: 9}) } />
          { user.uid 
            ? this.authedRoutes()
            : this.unAuthedRoutes() }
        </div>
      </BrowserRouter>
    )
  }
}