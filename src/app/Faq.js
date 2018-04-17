//packages
import React from 'react'
import { Link } from 'react-router-dom' //eslint-disable-line
//code
const $context='Faq'
class Faq extends React.Component{
    constructor(props){
        super(props)
        //build working memory
        const $location=props.history
        const buildProperty=(propertyName,defaultWorkingValue)=>{return ($location.state?($location.state[$context]?$location.state[$context][propertyName]||defaultWorkingValue:defaultWorkingValue):defaultWorkingValue)}
        this.state={
            id:$context,
            property1:buildProperty('property1','default')
        }
        //other
    }
    render(){
        const wm=this.state //working memory
        const ViewComponentA=<React.Fragment>{wm.id}</React.Fragment>
        return <div id="ViewComponentA">{ViewComponentA}</div>
    }
}
export default Faq