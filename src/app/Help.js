//packages
import React from 'react'
import { Link } from 'react-router-dom' //eslint-disable-line
//code
const $context='Help'
class Help extends React.Component{
    constructor(props){
        super(props)
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
        const Help=<React.Fragment>{wm.id}</React.Fragment>
        return <div id="Help">{Help}</div>
    }
}
export default Help