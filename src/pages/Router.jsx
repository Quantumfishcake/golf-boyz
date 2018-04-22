import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom'

import Header from '../components/Header/Header'
import Home from './Home/Home'
import Login from './Login/Login'
import ScoreBoard from './ScoreBoard/ScoreBoard'
import { auth } from 'firebase'


export default class Router extends Component {
  state = {
    user: {},
  }
  componentWillMount() {
    auth().onAuthStateChanged((user) => {
      this.setState({ user })
    });    
  }
  authedRoutes() {
    return (
      <div>
        <Route exact path="/score" component={ScoreBoard}/>
        <Route exact path="/" component={Home}/>
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
          <Header user={ user }/>
          { user.uid 
            ? this.authedRoutes()
            : this.unAuthedRoutes() }
        </div>
      </BrowserRouter>
    )
  }
}