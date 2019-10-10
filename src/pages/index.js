import React from "react"

import Firebase, { FirebaseContext } from '../components/firebase/index'
import Login from '../components/auth/Login'

import '../components/auth/login.css'
const IndexPage = () => (
    <FirebaseContext.Provider value={new Firebase()}>
        <div className='login'>
            <Login/>
        </div>
    </FirebaseContext.Provider>
)

export default IndexPage
