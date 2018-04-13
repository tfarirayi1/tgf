//packages
import React from 'react'
import { Route } from 'react-router-dom'
import { Auth } from 'aws-amplify'
//components
import ViewComponentA from './ViewComponentA'
import ViewComponentC from './ViewComponentC'
import AccessDenied from './AccessDenied'
//code
var $locations
class RouteGroupA extends React.Component{
    checkIdentity(){
        //verify session
        Auth.currentSession()
            .then(this.setState(()=>({status:'authorised'})))
            .catch(this.setState(()=>({status:'unauthorised'})))
    }
    constructor(props){
        super(props)
        //configure routing
        $locations=[
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
        this.state={
            id:'RouteGroupA',
            status:'authorised',
        }
        //other
    }
    componentDidMount(){
        this.checkIdentity()
    }
    render(){
        const wm=this.state
        let authorised=$locations.map((route,index)=><Route key={index} exact={!route.transcend} path={route.address} component={route.resource}/>)
        let unauthorised=$locations.map((route,index)=>{return (route.public?<Route key={index} exact={!route.transcend} path={route.address} component={route.resource}/>:<Route key={index} exact={true} path={route.address} component={AccessDenied}/>)})
        const RouteGroupA=wm.status==='authorised'?authorised:unauthorised
        return <div id="RouteGroupA">{RouteGroupA}</div>
    }
}
export default RouteGroupA