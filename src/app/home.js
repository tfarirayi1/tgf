//packages
import React from 'react';
import { f1 as propertySetter, f2 as getData } from './_helpers';
import { Link } from 'react-router-dom'; //eslint-disable-line
//code
const context='Home';
const q1=`{books{_id,author,title}}`;
export default class Origin extends React.Component {
    constructor(props) {
        super(props);
        //build-working-memory
        this.state = {
            id:context,
            property1:propertySetter(context,'property1','default'),
        };
        getData(q1);
    }
    render() {
        const wm=this.state;
        const Origin=<React.Fragment>{wm.id}</React.Fragment>;
        return <div id="Origin">{Origin}</div>;
    }
}
