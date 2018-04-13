//packages
import React from 'react'
//code
class AccessDenied extends React.Component{
    constructor(props){
        super(props)
        //configure routing
        //build memory
        this.state={
            id:'AccessDenied',
        }
        //other
    }
    render(){
        const wm=this.state
        const AccessDenied=<React.Fragment>{wm.id}</React.Fragment>
        return <div id="AccessDenied">{AccessDenied}</div>
    }
}
export default AccessDenied