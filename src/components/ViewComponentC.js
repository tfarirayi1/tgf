//packages
import React from 'react'
//code
class ViewComponentC extends React.Component{
    constructor(props){
        super(props)
        //configure routing
        //build memory
        this.state={
            id:'ViewComponentC',
        }
        //other
    }
    render(){
        const wm=this.state
        const ViewComponentC=<React.Fragment>{wm.id}</React.Fragment>
        return <div id="ViewComponentC">{ViewComponentC}</div>
    }
}
export default ViewComponentC