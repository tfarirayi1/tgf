//packages
import React from 'react'
//code
class ViewComponentA extends React.Component{
    constructor(props){
        super(props)
        //configure routing
        //build memory
        this.state={
            id:'ViewComponentA',
        }
        //other
    }
    render(){
        const wm=this.state
        const ViewComponentA=<React.Fragment>{wm.id}</React.Fragment>
        return <div id="ViewComponentA">{ViewComponentA}</div>
    }
}
export default ViewComponentA