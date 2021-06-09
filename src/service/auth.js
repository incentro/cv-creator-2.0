import firebase from "../config/firebase-config";

export const loginAuth = (provider) => {
   return firebase.auth().signInWithPopup(provider).then((res) => {
        return res
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
