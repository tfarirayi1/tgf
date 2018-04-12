//packages
import React from 'react'
//code
const $context='ViewComponentA'
class ViewComponentA extends React.Component{
    constructor(props){
        super(props)
        //configure routing
        //build memory
        this.state={
            id:$context,
        }
        //other
    }
    render(){
        const ViewComponentA=<React.Fragment>{this.state.id}</React.Fragment>
        return <div id="ViewComponentA">{ViewComponentA}</div>
    }
}
export default ViewComponentA