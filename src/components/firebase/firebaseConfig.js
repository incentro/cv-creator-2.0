import app from 'firebase/app'
import 'firebase/auth'
import * as firebase from "../auth/Login"

const config = {
    apiKey: "AIzaSyA2uarjhCQN_uUyqifyST6qKvxYoIT882s",
    authDomain: "cv-creator-86421.firebaseapp.com",
    databaseURL: "https://cv-creator-86421.firebaseio.com",
    projectId: "cv-creator-86421",
    storageBucket: "",
    messagingSenderId: "553432955574",
}

class Firebase {
    constructor() {
        app.initializeApp(config)

        this.auth = app.auth
    }

    const providers = {
        googleProvider: new firebase.auth.GoogleAuthProvider(),
    }

    signin = () => {
        signInWithGoogle
    }

    signOut = () => {

    }
}

// export const database = firebase.database()

export default Firebase