import React from "react";
import AccountButton from "./AccountButton";

export default class NavigationComponent extends React.Component {
    render() {
        return (<nav className="white" role="navigation">
            <div className="nav-wrapper container">
                <a id="logo-container" href="#" className="brand-logo">
                    <img src="/img/capgemini-logo.svg" alt="Capgemini logo" className="brand-logo--capgemini"/>
                </a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#"><i className="material-icons left">create</i>Predictions</a></li>
                    <li><a href="#"><i className="material-icons left">format_list_numbered</i>Scores</a></li>
                    <li><a href="#"><i className="material-icons left">account_circle</i>Profile</a></li>
                    <li><AccountButton/></li>
                </ul>

                <ul id="nav-mobile" className="sidenav">
                    <li><a href="#">Predictions</a></li>
                    <li><a href="#">Scores</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
                <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        </nav>);
    }

}