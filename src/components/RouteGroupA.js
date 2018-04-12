//packages
import React from 'react'
import { Route } from 'react-router-dom'
import { Auth } from 'aws-amplify'
//components
import ViewComponentA from './ViewComponentA'
import ViewComponentC from './ViewComponentC'
import AccessDenied from './AccessDenied'
//code
var $routes
const $context='RouteGroupA'
class RouteGroupA extends React.Component{
    checkIdentity(){
        //verify session
        Auth.currentSession()
            .then(this.setState(()=>{return {status:'authorised'}}))
            .catch(this.setState(()=>{return {status:'unauthorised'}}))
    }
    constructor(props){
        super(props)
        //configure routing
        $routes=[
            {
                location:'/x',
                transcend:false, 
                resource:ViewComponentA,
                public:false,
                cog:'0.x',
            },
            {
                location:'/x/x',
                transcend:false,
                resource:ViewComponentC,
                public:true,
                cog:'0.x.x',
            }
        ]
        //build memory
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
        let authorised=$routes.map((route,index)=>{
            return <Route key={index} exact={!route.transcend} path={route.location} component={route.resource}/>
        })
        let unauthorised=$routes.map((route,index)=>{
            if(route.public){
                return <Route key={index} exact={!route.transcend} path={route.location} component={route.resource}/>
            }
            return <Route key={index} exact={true} path={route.location} component={AccessDenied}/>
        })
        const RouteGroupA=this.state.status==='authorised'?authorised:unauthorised
        return <div id="RouteGroupA">{RouteGroupA}</div>
    }
}
export default RouteGroupA