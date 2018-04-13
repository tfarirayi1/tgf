//packages
import React from 'react'
import { Route } from 'react-router-dom'
//code
let $routes
const $context='ViewComponentA'
class ViewComponentA extends React.Component{
    constructor(props){
        super(props)
        //define routes
        $routes=[
            {
                endpoint:'',
                transcend:'',
                resource:'',
                public:'',
            }
        ]
        //build working memory
        const $location=props.history
        const buildPublicProperty=(propertyName,defaultWorkingValue)=>{return ($location.state?($location.state[$context]?$location.state[$context][propertyName]||defaultWorkingValue:defaultWorkingValue):defaultWorkingValue)}
        this.state={
            id:$context,
            property1:buildPublicProperty('property1','default')
        }
        //other
    }
    render(){
        const wm=this.state //working memory
        const routes=$routes.map((route,index)=><Route key={index} exact={route.transcend} path={route.endpoint}/>) //eslint-disable-line
        const ViewComponentA=<React.Fragment>{wm.id}</React.Fragment>
        return <div id="ViewComponentA">{ViewComponentA}</div>
    }
}
export default ViewComponentA