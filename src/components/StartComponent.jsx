import React from "react";
import {loginWithGoogle, logout} from "../helpers/auth";
import {firebaseAuth} from "../config/firebase";


const firebaseAuthKey = "firebaseAuthInProgress";

export default class StartComponent extends React.Component {
    state = {
        isSignedIn: false,
        userProfile: {}
    };

    componentDidMount() {
        // Updating the `isSignedIn` and `userProfile` local state attributes when the Firebase Auth
        // state changes.
        this.unregisterAuthObserver = firebaseAuth().onAuthStateChanged((user) => {
            this.setState({isSignedIn: !!user, userProfile: user || {}});
        });
    }

    componentWillUnmount() {
        // Un-registers the auth state observer.
        this.unregisterAuthObserver();
    }

    handleGoogleLogin = () => {
        loginWithGoogle()
            .catch(function (error) {
                alert(error); // or show toast
                localStorage.removeItem(firebaseAuthKey);
            });
        localStorage.setItem(firebaseAuthKey, "1");
    };

    handleLogout = () => {
        logout();
        localStorage.removeItem(firebaseAuthKey);
    };

    render() {
        return (<div>
            <button onClick={this.handleGoogleLogin}>Sign in using Google</button>
            <button onClick={this.handleLogout}>Logout</button>
            <h1>Signed in: {this.state.userProfile.displayName}&lt;{this.state.userProfile.email}&gt;</h1>
        </div>);
    }

}