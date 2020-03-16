import fire from "config/fire";

export const __isLogged = () => {
    return new Promise((resolve) => fire.auth().onAuthStateChanged(user =>{
        resolve(user)
    }))
};
export const __resetPassword = (_userEmail) => {
    const _auth = fire.auth();
    if(_userEmail == null){
        _userEmail = _auth.currentUser.email;
    }
    return _auth.sendPasswordResetEmail(_userEmail)
};