//packages
import React from 'react';
import {Route,Link,withRouter,Switch} from 'react-router-dom';
//components
import {Routes} from './_routes';
import {configureAuth} from './_helpers';
import _404 from './_404';
//styles
import './styles/shell.css';
//main-code
class Shell extends React.Component{
    _stepBack(){
        this.props.history.goBack();
    }
    constructor(props){
        super(props);
        configureAuth();
    }
    render(){
        const {location}=this.props;
        const homeButton=(
            <div className="home-button">
                <Link to="/menu">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="33px" height="33px" viewBox="0 0 24 24">
                    <g id="Bounding_Boxes">
                        <path fill="none" d="M0,0h24v24H0V0z"/>
                    </g>
                    <g id="Rounded">
                        <path d="M4,18h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,17.55,3.45,18,4,18z M4,13h16c0.55,0,1-0.45,1-1
                            v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,12.55,3.45,13,4,13z M3,7L3,7c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1v0
                            c0-0.55-0.45-1-1-1H4C3.45,6,3,6.45,3,7z"/>
                    </g>
                </svg>
                </Link>
            </div>
        );
        const backButton=(
            <div className="back-button" onClick={this._stepBack.bind(this)}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="33px" height="33px" viewBox="0 0 24 24">
                        <path fill="none" d="M0,0h24v24H0V0z"/>
                        <path d="M18.3,5.71L18.3,5.71c-0.39-0.39-1.02-0.39-1.41,0L12,10.59L7.11,5.7c-0.39-0.39-1.02-0.39-1.41,0l0,0
                            c-0.39,0.39-0.39,1.02,0,1.41L10.59,12L5.7,16.89c-0.39,0.39-0.39,1.02,0,1.41h0c0.39,0.39,1.02,0.39,1.41,0L12,13.41l4.89,4.89
                            c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L13.41,12l4.89-4.89C18.68,6.73,18.68,6.09,18.3,5.71z"/>
                </svg>
            </div>
        );
        const navigationButton=location.pathname==='/menu'?backButton:homeButton;
        const links=Routes.map((item,index)=>{
            return(
                <div className="nav-link" key={index}>
                    <Link to={item.endpoint}>{item.link_name}</Link>
                </div>
            );
        });
        const routes=Routes.map((item,index)=>{
            return(
                <Route key={index} exact path={item.endpoint} component={item.component}/>
            );
        });
        const social=(
            <div className="social">
                <div className="social_button">
                    <a href="/facebook" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </div>
                <div className="social_button">
                    <a href="/facebook" target="_blank">
                        <i className="fab fa-behance"></i>
                    </a>
                </div>
                <div className="social_button">
                    <a href="/facebook" target="_blank">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <div className="social_button">
                    <a href="/facebook" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        );
        const layer1=(
            <div className="layer1">
                <div className="top-panel">
                    <div className="navigation">
                        {links}
                    </div>
                    {social}
                </div>
                <div className="view">
                    <Switch>
                        {routes}
                        <Route component={_404}/>
                    </Switch>
                </div>
            </div>
        );
        return(
            <div id="Shell">
                {layer1}
            </div>
        );
    }
}
export default withRouter(Shell);