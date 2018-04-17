import {firebaseAuth, googleProvider} from "../config/firebase";

export function loginWithGoogle() {
    return firebaseAuth().signInWithRedirect(googleProvider);
}


function authenticate(promise) {
    return promise
        .then(function (result) {
            // login with your app with result object to get accessToken (token)
            // localStorage.save(token);
            const token = result.credential.accessToken;
            const user = result.user;
            console.log("login happened with firebase, ", JSON.stringify(user));
            localStorage.setItem("firebaseUser", JSON.stringify(result));
            return Promise.resolve(result);
        }).catch(function (error) {
            const {errorCode, errorMessage, email, credential} = error;

            alert("failed firebase login" + error);
            return Promise.reject("err");
        });
}

function loginWithFirebase(provider) {
    return firebaseAuth().signInWithRedirect(provider);
}

export function logout() {
    return firebaseAuth().signOut();
}