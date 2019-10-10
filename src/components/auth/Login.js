import React, { Component } from 'react'
// import { Link } from "gatsby"
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../firebase/firebaseConfig'

import './login.css'

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
            <div className='jumbotron'>
                <h1 className='title'>incentro cv creator</h1>
              {
                user ?
                  <button onClick={signOut}>Sign out</button>
                  //@todo if logged in successful && read right, send to the form page
                  // {/*<Link to={'/page-2'}>*/}
                // <button className='login_button' onClick={signInWithGoogle}>Login with your incentro account
                // </button>
                  // </Link>
                  :
                  <button className='login_button' onClick={signInWithGoogle}>Login with your incentro account
                </button>
              }
            </div>
        )
    }
}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login)