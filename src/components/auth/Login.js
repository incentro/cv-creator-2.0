import React, { Component } from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../../firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)

const firebaseAppAuth = firebaseApp.auth()

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
}

class Login extends Component {
    render() {

        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props

        return (
            <div>
                <h1>Welcome to the Incentro cv creator</h1>
                {
                    user
                        ? <p>Hello, {user.displayName}</p>
                        : <p>Please sign in.</p>
                }
                {
                    user
                        ? <button onClick={signOut}>Sign out</button>
                        : <button onClick={signInWithGoogle}>Login with Google</button>
                }
            </div>
        )
    }
}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login)