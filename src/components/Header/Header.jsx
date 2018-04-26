import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import './Header.css'

export default ({ user, newRound }) => {
    return (
        <div className="header-row">
            { !user.uid && <Link to="/login">Login</Link> }
            { user.uid && <Link to="/">Home</Link> }
            { user.uid && <Link to="/score">Score</Link> }
            { user.uid && <Link to="/Rounds">Rounds</Link> }
            <div className="spacer" />
            { user.uid && <button onClick={ newRound }>New Game</button> }
            <Avatar user={user} />
        </div>
    )
}