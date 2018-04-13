//packages
import React from 'react'
import { Route } from 'react-router-dom'
import { Auth } from 'aws-amplify'
//components
import ViewComponentA from './ViewComponentA'
import ViewComponentC from './ViewComponentC'
import AccessDenied from './AccessDenied'
//code
let $routes
const $context='GateA'
class GateA extends React.Component{
    checkIdentity(){
        //verify session
        Auth.currentSession()
            .then(this.setState(()=>({status:'authorised'})))
            .catch(this.setState(()=>({status:'unauthorised'})))
    }
    constructor(props){
        super(props)
        //define routes
        $routes=[
            {
                endpoint:'/x',
                transcend:false, 
                resource:ViewComponentA,
                public:false,
            },
            {
                endpoint:'/x/x',
                transcend:false,
                resource:ViewComponentC,
                public:true,
            }
        ]
        //build memory
        const $location=props.history
        const buildPublicProperty=(propertyName,defaultWorkingValue)=>{return ($location.state?($location.state[$context]?$location.state[$context][propertyName]||defaultWorkingValue:defaultWorkingValue):defaultWorkingValue)} //eslint-disable-line
        this.state={
            id:$context,
            status:'authorised',
        }
        //other
    }
    componentDidMount(){
        this.checkIdentity()
    }
    render(){
        const wm=this.state
        const authorised=$routes.map((route,index)=><Route key={index} exact={!route.transcend} path={route.endpoint} component={route.resource}/>)
        const unauthorised=$routes.map((route,index)=>{return (route.public?<Route key={index} exact={!route.transcend} path={route.endpoint} component={route.resource}/>:<Route key={index} exact={true} path={route.endpoint} component={AccessDenied}/>)})
        const RouteGroupA=wm.status==='authorised'?authorised:unauthorised
        return <div id="RouteGroupA">{RouteGroupA}</div>
    }
}
export default GateA