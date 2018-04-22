import React from 'react'
import './Avatar.css'

export default ({ user }) => {
    return (
        <img className="avatar" src={ user.photoURL } />
    )
}