//packages
import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Auth } from 'aws-amplify';
//components
import Origin from './home';
import HelpRouter from './help-router';
import AccountRouter from './account-router';
//styles
import './styles/shell.css';
//main
var _routes;
const _context='Shell';
export default class Shell extends React.Component{
    f1(propertyName,states){
    //update-the-state-of-a-property
        this.setState((prevState)=>{
            let nextState={};
            let currentState=prevState;
            for(let i=0;i<states.length;i++){
                if(currentState[propertyName]===states[i]){
                    if(i===states.length-1){
                        nextState[propertyName]=states[0];
                        break;
                    }
                    nextState[propertyName]=states[i+1];
                    break;
                }
            }
            return nextState;
        });
    //...the notify history
    // let newHistory=Object.assign({},window.history.state)
    // Object.assign(newHistory[$context],nextState)
    // window.history.pushState(newHistory,'')
    }
    f2(){
    //configure-amazon-cognito-details
        Auth.configure({
            identityPoolId:'eu-west-1:25388842-fe3f-47da-b371-8523843a6018',
            userPoolId:'eu-west-1_CTOnEIecG',
            userPoolWebClientId:'1f39eiq38scgarj4l6hdnmlqct',
            mandatorySignIn:true
        });
    }
    f3(propertyName,defaultValue){
        //property-builder
        const history=window.history;
        return history.state ? ( history.state[_context] ? history.state[_context][propertyName] || defaultValue : defaultValue ) : defaultValue;
    }
    f4(propertyName){
        //reset-property
        this.setState((prevState)=>{
            let nextState={};
            nextState[propertyName]='default';
            return nextState;
        });
    }
    constructor(props){
        super(props);
        //configure-pages
        _routes=[
            {
                endpoint:'/',
                title:'home',
                transcend:false,
                component:Origin
            }
            ,{
                endpoint:'/help',
                title:'help',
                transcend:true,
                component:HelpRouter
            }
            ,{
                endpoint:'/account',
                title:'account',
                transcend:true,
                component:AccountRouter
            },
        ];
        //build-working-memory
        this.state={
            id:_context,
            menu:this.f3('menu','default')
        };
        this.f2();
    }
    render(){
        //render-html
        const routes=(
            _routes.map((route,index)=>{
                return <Route key={index} exact={!route.transcend} path={route.endpoint} component={route.component}/>;
            })
        );
        const links=(
            _routes.map((route,index)=>{
                return <Link key={index} to={route.endpoint} onClick={e=>this.f4('menu')}>{route.title}<br/></Link>;
            })
        );
        const menu=(
            <div className="menu">{links}</div>
        );
        const layer1=(
            <div className="layer1">{menu}</div>
        );
        const tools=(
            <div className="tool-panel">
                <div className="more-button" onClick={e=>this.f1('menu',['default','state2'])}></div>
                <div className="label"><Link to='/'>maona-systems&trade;</Link></div>
            </div>
        );
        const view=(
            <div className="view">{routes}</div>
        );
        const layer2=(
            <div className="layer2">{tools}{view}</div>
        );
        const Shell=(
            <React.Fragment>{layer1}{layer2}</React.Fragment>
        );
        return <div id="shell" data-state-menu={this.state.menu}>{Shell}</div>;
    }
}