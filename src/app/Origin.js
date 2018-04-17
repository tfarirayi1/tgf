//packages
import React from 'react'
import { Link } from 'react-router-dom' //eslint-disable-line
//code
const $context='Origin'
class Origin extends React.Component{
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
        const $links=[
            {
                path:'/',
                title:'origin'
            },
            {
                path:'/help',
                title:'help'
            },
            {
                path:'/help/faq',
                title:'faq'
            },
        ]
        const map=$links.map((link,i)=><div key={i}><Link to={link.path}>&nbsp;{link.title}*</Link></div>)
        const Origin=<React.Fragment>{wm.id}{map}</React.Fragment>
        return <div id="Origin">{Origin}</div>
    }
}
export default Origin