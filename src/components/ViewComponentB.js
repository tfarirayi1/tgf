//packages
import React from 'react'
//code
class ViewComponentB extends React.Component{
    constructor(props){
        super(props)
        //configure routing
        //build memory
        this.state={
            id:'ViewComponentB',
        }
        //other
    }
    render(){
        const wm=this.state
        const ViewComponentB=<React.Fragment>{wm.id}</React.Fragment>
        return <div id="ViewComponentB">{ViewComponentB}</div>
    }
}
export default ViewComponentB