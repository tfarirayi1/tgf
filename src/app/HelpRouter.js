//packages
import React from 'react'
import { Route } from 'react-router-dom'
import { Auth } from 'aws-amplify'
//components
import Faq from './Faq'
import Help from './Help'
import AccessDenied from './AccessDenied'
//code
var $routes
const $context='HelpContainer'
class HelpContainer extends React.Component{
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
                public:false,
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
        const HelpContainer=wm.status==='authorised'?authorised:unauthorised
        return <div id="HelpContainer">{HelpContainer}</div>
    }
}
export default HelpContainer