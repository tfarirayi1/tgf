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
                title:'Origin'
            },
            {
                path:'/help',
                title:'Help'
            },
            {
                path:'/account',
                title:'Account'
            },
        ]
        const map=$links.map((link,i)=>{
            return link.title===$context?null:<div key={i}><Link to={link.path}>&nbsp;{link.title}</Link></div>
        })
        const Origin=<React.Fragment>{wm.id}{map}</React.Fragment>
        return <div id="Origin">{Origin}</div>
    }
}
export default Origin