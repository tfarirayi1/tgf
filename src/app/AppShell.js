//packages
import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Auth } from 'aws-amplify'
//components
import Index from './Index'
import HelpRouter from './HelpRouter'
//styles
import './styles/Index.css'
import './styles/Shell.css'
//code
var $routes
const $context='Shell'
class AppContainer extends React.Component{
    cyclePropertyState(property,states){
        //update current state
        this.setState((prevState)=>{
            let nextState={}
            let currentState=prevState
            for(let i=0;i<states.length;i++){
                if(currentState[property]===states[i]){
                    if(i===states.length-1){
                        nextState[property]=states[0]
                        break
                    }
                    nextState[property]=states[i+1]
                    break
                }
            }
            return nextState
        })
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
                endpoint:'/', //index
                transcend:false,
                resource:Index,
            },
            {
                endpoint:'/help',
                transcend:true,
                resource:HelpRouter,
            }
        ]
        //build working memory
        const $location=window.history
        const buildProperty=(propertyName,defaultWorkingValue)=>{return ($location.state?($location.state[$context]?$location.state[$context][propertyName]||defaultWorkingValue:defaultWorkingValue):defaultWorkingValue)}
        this.state={
            id:$context,
            menu:buildProperty('menu','default'),
        }
        //other
        this.setupUserAuthentication()
    }
    render(){
        const links=$routes.map((route,index)=><Link key={index} to={route.endpoint}>{route.endpoint}<br/></Link>)
        const map=<div className="map">{links}</div>
        const mapToggleButton=<div className="map-toggle-button" onClick={e=>this.cyclePropertyState('menu',['default','state2'])}></div>
        const routes=$routes.map((route,index)=><Route key={index} exact={!route.transcend} path={route.endpoint} component={route.resource}/>)
        const view=<div className="view">{mapToggleButton}{routes}</div>
        const Shell=<React.Fragment>{map}{view}</React.Fragment>
        return <div id="Shell" data-state-menu={this.state.menu}>{Shell}</div>
    }
}
export default AppContainer
