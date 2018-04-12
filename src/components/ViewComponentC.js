//packages
import React from 'react'
//code
const $context='ViewComponentC'
class ViewComponentC extends React.Component{
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
        const ViewComponentC=<React.Fragment>{this.state.id}</React.Fragment>
        return <div id="ViewComponentC">{ViewComponentC}</div>
    }
}
export default ViewComponentC