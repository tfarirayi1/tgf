//packages
import React from 'react'
//code
const $context='ViewComponentB'
class ViewComponentB extends React.Component{
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
        const ViewComponentB=<React.Fragment>{this.state.id}</React.Fragment>
        return <div id="ViewComponentB">{ViewComponentB}</div>
    }
}
export default ViewComponentB