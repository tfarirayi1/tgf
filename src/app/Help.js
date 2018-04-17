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
        const link=<div><Link to={this.props.match.url+'/faq'}>&nbsp;faq</Link></div>
        return <div id="Help">{Help}{link}</div>
    }
}
export default Help