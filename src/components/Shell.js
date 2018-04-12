//components
import ViewComponentB from './ViewComponentB'
import RouteGroupA from './RouteGroupA'
//styles
import './styles/Index.css'
import './styles/Shell.css'
//npm
import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Auth } from 'aws-amplify'
//code
var $routes
var $location=window.history
var $context='Shell'
class Shell extends React.Component{
    cyclePropertyState(property,states){
        //update memory
        let nextState={}
        let currentState=this.state
        for(var i=0;i<states.length;i++){
            if(currentState[property]===states[i]){
                if(i===states.length-1){
                    nextState[property]=states[0]
                    break 
                }else{
                    nextState[property]=states[i+1]
                    break
                }
            }
        }
        this.setState(()=>{return nextState})
        //...the notify history
        // let newHistory=Object.assign({},window.history.state)
        // Object.assign(newHistory[$context],nextState)
        // window.history.pushState(newHistory,'')
    }
    setupUserAuthentication(){
        //cognito details
        Auth.configure({identityPoolId:'eu-west-1:25388842-fe3f-47da-b371-8523843a6018',userPoolId:'eu-west-1_CTOnEIecG',userPoolWebClientId:'1f39eiq38scgarj4l6hdnmlqct',mandatorySignIn:true})  
    }
    constructor(props){
        super(props)
        //configure routes
        $routes=[
            {
                location:'/',
                transcend:false,
                resource:ViewComponentB,
                cog:'0.x',
            },
            {
                location:'/x',
                transcend:true,
                resource:RouteGroupA,
                cog:'0.x',
            },
        ]
        //build state
        const buildProperty=(propertyName,defaultValue)=>{return ($location.state?($location.state[$context]?$location.state[$context][propertyName]||defaultValue:defaultValue):defaultValue)}
        this.state={
            id:$context,
            menu:buildProperty('menu','default'),
        }
        //other
        this.setupUserAuthentication()
    }
    render(){
        const map=<div className="map">{$routes.map((route,index)=><Link key={index} to={route.location}>{route.location}<br/></Link>)}</div>
        const mapToggleButton=<div className="map-toggle-button" onClick={e=>this.cyclePropertyState('menu',['default','state2'])}></div>
        const routes=$routes.map((route,index)=>{
            return <Route key={index} exact={!route.transcend} path={route.location} component={route.resource}/>
        })
        const view=<div className="view">{mapToggleButton}{routes}</div>
        const Shell=<React.Fragment>{map}{view}</React.Fragment>
        return <BrowserRouter><div id="Shell" data-state-menu={this.state.menu}>{Shell}</div></BrowserRouter>
    }
}
export default Shell
