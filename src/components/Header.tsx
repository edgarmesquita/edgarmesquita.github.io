import * as React from 'react';
import '../css/header.css';
export class Header extends React.Component {
    public render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-2">
                            <img className="profile-photo" src="/img/edgar.jpg" alt="Dan Lindsey : Full Stack Engineer" />
                        </div>
                        <div className="col-sm-12 col-md-7 header-details">
                            <h1>Edgar Mesquita</h1>
                            <h2>Software Architect</h2>
                            <ul className="social-icons">
                                <li><a href="https://www.facebook.com/edgar.rj"><i className="fa fa-facebook-f" /></a></li>
                                <li><a href="https://twitter.com/EdgarAlexsandro"><i className="fa fa-twitter" /></a></li>
                                <li><a href="https://www.linkedin.com/in/edgarmesquita/"><i className="fa fa-linkedin" /></a></li>
                                <li><a href="https://github.com/edgarmesquita"><i className="fa fa-github-alt" /></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-3 profile-action-container">
                            <a className="profile-action-button btn" target="_blank" rel="noopener noreferrer"
                                href="https://api.whatsapp.com/send?phone=351918399798"><i className="fa fa-paper-plane" /> Contact Me</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}