import firebase from "../config/firebase-config";

export const isLoggedIn = (user) => {
    const user = false
    //TODO Add logic to actually change true or false on login!
    if (user.user) {
        console.log(user.user)
        return true
    }
};

export const loginAuth = (provider) => {
   return firebase.auth().signInWithPopup(provider).then((res) => {
        return isLoggedIn(res)
    }).catch((err) => {
        return err
    })
};

export const logoutAuth = () => {
    return firebase.auth().signOut().then((res) => {
        console.log(res);
    }).catch((err) => {
        return err
    })
}
