//packages
import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//components
import { Routes } from './routes';
import { f4 } from './_helpers';
//styles
import './styles/shell.css';
//main-code
const Context='Shell';
export default class Shell extends React.Component{
    constructor(props){
        super(props);
        f4();
        //build-working-memory
        this.state={
            id:Context,
            menu:this.f3('menu','default')
        };
        this.f2();
    }
    render(){
        const Links=[
            {
                endpoint:'/services',
                title:'services',
            },{
                endpoint:'/stylists',
                title:'stylists',
            },{
                endpoint:'/help',
                title:'help',
            },{
                endpoint:'/account',
                title:'account',
            }
        ];
        const routes=Routes.map((item,index)=>{
            return (
                <div key={index}>
                    <Route exact={item.exact} path={item.endpoint} component={item.component}/>
                </div>
            );
        });
        const mainMenu=Links.map((item,index)=>{
            return(
                <div key={index} onClick={e=>this.f4('menu')}>
                    <NavLink to={item.endpoint}>{item.title}</NavLink>
                </div>
            );
        });
        //render-html
        const layer2=(
            <div className="layer2">
                <div className="menu">{mainMenu}</div>
            </div>
        );
        const layer1=(
            <div className="layer1">
                <div className="tool-panel">
                    <div className="more-button" onClick={e=>this.f1('menu',['default','state2'])}>
                    </div>
                    <div className="label" onClick={e=>this.f4('menu')}>
                        <NavLink to='/'>maona-systems&trade;</NavLink>
                    </div>
                </div>
                <div className="view">{routes}</div>
                <div className="menu">{mainMenu}</div>
            </div>
        );
        return (
            <div id={Context} data-menu-state={this.state.menu}>{layer1}</div>
        );
    }
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
    
    }
    f3(propertyName,defaultValue){
        //property-builder
        const history=window.history;
        return history.state ? ( history.state[Context] ? history.state[Context][propertyName] || defaultValue : defaultValue ) : defaultValue;
    }
    f4(propertyName){
        //reset-property
        this.setState((prevState)=>{
            let nextState={};
            nextState[propertyName]='default';
            return nextState;
        });
    }
}