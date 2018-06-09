//packages
import React from 'react'
import { Route } from 'react-router-dom'
import { Auth } from 'aws-amplify'
//components
import Faq from './faq'
import Help from './help'
import AccessDenied from './access-denied'
//default variables
var $routes
const $context='HelpRouter'
//component
class HelpRouter extends React.Component{
    checkIdentity(){
        //verify session
        Auth.currentSession()
            .then(this.setState(()=>({status:'authorised'})))
            .catch(this.setState(()=>({status:'unauthorised'})))
    }
    constructor(props){
        super(props)
        //configure routes
        const path=props.match.url
        $routes=[
            {
                endpoint:path,
                transcend:false, 
                resource:Help,
                public:true,
            },
            {
                endpoint:path+'/faq',
                transcend:false,
                resource:Faq,
                public:true,
            }
        ]
        //build memory
        const $location=props.history
        const buildProperty=(propertyName,defaultWorkingValue)=>{return ($location.state?($location.state[$context]?$location.state[$context][propertyName]||defaultWorkingValue:defaultWorkingValue):defaultWorkingValue)} //eslint-disable-line
        this.state={
            id:$context,
            status:buildProperty('status','authorised'),
        }
        //other
    }
    componentDidMount(){
        this.checkIdentity()
    }
    render(){
        const wm=this.state
        const authorised=$routes.map((route,index)=><Route key={index} exact={!route.transcend} path={route.endpoint} component={route.resource}/>)
        const unauthorised=$routes.map((route,index)=>{return (route.public?<Route key={index} exact={!route.transcend} path={route.endpoint} component={route.resource}/>:<Route key={index} exact={true} path={route.endpoint} component={AccessDenied} />)})
        const HelpRouter=wm.status==='authorised'?authorised:unauthorised
        return <div id="HelpRouter">{HelpRouter}</div>
    }
}
export default HelpRouter