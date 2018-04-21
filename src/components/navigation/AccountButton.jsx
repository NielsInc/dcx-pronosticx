import React from "react";
import {loginWithGoogle, logout} from "../../helpers/auth";
import {firebaseAuth} from "../../config/firebase";


const firebaseAuthKey = "firebaseAuthInProgress";

export default class AccountButton extends React.Component {
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
        {/*<h1>Signed in: {this.state.userProfile.displayName}&lt;{this.state.userProfile.email}&gt;</h1>*/
        }
        return (<div>
            {!this.state.isSignedIn ?
                <button className={'btn red waves-effect waves-light'} onClick={this.handleGoogleLogin}>
                    Log in</button> :
                <button className={'btn white blue-text waves-effect waves-light'} onClick={this.handleLogout}>
                    <i className="material-icons left">exit_to_app</i>Logout</button>}
        </div>);
    }

}