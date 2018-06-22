//packages
import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
//components
import {Routes} from './_routes';
import {configureAuth} from './_helpers';
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
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="31px" height="31px" viewBox="0 0 24 24">
                        <g id="Bounding_Boxes">
                            <path fill="none" d="M0,0h24v24H0V0z"/>
                        </g>
                        <g id="Rounded">
                            <path d="M13,19V7.83l4.88,4.88c0.39,0.39,1.03,0.39,1.42,0l0,0c0.39-0.39,0.39-1.02,0-1.41l-6.59-6.59c-0.39-0.39-1.02-0.39-1.41,0
                                L4.7,11.29c-0.39,0.39-0.39,1.02,0,1.41l0,0c0.39,0.39,1.02,0.39,1.41,0L11,7.83V19c0,0.55,0.45,1,1,1h0C12.55,20,13,19.55,13,19z"
                                />
                        </g>
                    </svg>
                </Link>
            </div>
        );
        const backButton=(
            <div className="back-button" onClick={this._stepBack.bind(this)}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="31px" height="31px" viewBox="0 0 24 24">
                        <path fill="none" d="M0,0h24v24H0V0z"/>
                        <path d="M18.3,5.71L18.3,5.71c-0.39-0.39-1.02-0.39-1.41,0L12,10.59L7.11,5.7c-0.39-0.39-1.02-0.39-1.41,0l0,0
                            c-0.39,0.39-0.39,1.02,0,1.41L10.59,12L5.7,16.89c-0.39,0.39-0.39,1.02,0,1.41h0c0.39,0.39,1.02,0.39,1.41,0L12,13.41l4.89,4.89
                            c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L13.41,12l4.89-4.89C18.68,6.73,18.68,6.09,18.3,5.71z"/>
                </svg>
            </div>
        );
        const navigationButton=location.pathname==='/menu'?backButton:homeButton;
        const label=(
            <div className="label">
                <Link to="/">maona-systems</Link>
            </div>
        );
        const routes=Routes.map((item,index)=>{
            return(
                <div key={index}>
                    <Route exact path={item.endpoint} component={item.component}/>
                </div>
            );
        });
        const layer1=(
            <div className="layer1">
                <div className="tool-panel">
                    {navigationButton}
                    {label}
                </div>
                <div className="view">
                    {routes}
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