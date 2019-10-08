import React, { Component } from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../../firebaseConfig'

import './login.css'
const firebaseApp = firebase.initializeApp(firebaseConfig)

const firebaseAppAuth = firebaseApp.auth()

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
}

class Login extends Component {

    //@todo if logged in successful && read right, send to the form page

    render() {

        const {
            signInWithGoogle,
        } = this.props

        return (
            <div className='login'>
                <div className='jumbotron'>
                    <h1 className='title'>incentro cv creator</h1>
                    <button className='login_button' onClick={signInWithGoogle}>Login with your incentro account</button>
                </div>
            </div>
        )
    }
}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login)