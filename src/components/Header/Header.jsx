import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import './Header.css'

export default ({ user }) => {
    console.log(user)

    return (
        <div className="header-row">
            { !user.uid && <Link to="/login">Login</Link> }
            { user.uid && <Link to="/">Home</Link> }
            { user.uid && <Link to="/score">Score</Link> }
            <div className="spacer" />
            <Avatar user={user} />
        </div>
    )
}