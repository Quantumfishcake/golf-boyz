import React from 'react'
import { auth } from 'firebase';
import { app } from '../Firebase'

const authWithGoogle = () => {
    const provider = new auth.GoogleAuthProvider();
    auth().setPersistence(auth.Auth.Persistence.SESSION).then(() => {
        auth().signInWithPopup(provider).then((result) => {
            const token = result.credential.accessToken;
            const user = result.user;
            console.log({ token, user })
        })
    })
}

export default () => {
    return (
        <div> 
            <button onClick={ authWithGoogle }>Auth with Google</button>
        </div>
    )
}