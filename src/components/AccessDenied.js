//packages
import React from 'react'
//code
const $context='AccessDenied'
class AccessDenied extends React.Component{
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
        const AccessDenied=<React.Fragment>{this.state.id}</React.Fragment>
        return <div id="AccessDenied">{AccessDenied}</div>
    }
}
export default AccessDenied