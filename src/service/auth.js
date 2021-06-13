import firebase from "../config/firebase-config";

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const isLoggedIn = () => {
    const user = getUser()
    //TODO Add logic to actually change true or false on login!
    return !!user.uid
};

export const loginAuth = (provider) => {
   return firebase.auth().signInWithPopup(provider).then((res) => {
        // return isLoggedIn(res)
        const user = res.user;
        setUser(user)
        return (user)
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

