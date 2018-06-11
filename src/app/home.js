//packages
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css';
//code
const Context='Home';
const Links=[
    {
        endpoint:'/services',
        title:'services',
    }
    ,{
        endpoint:'/stylists',
        title:'stylists',
    }
    ,{
        endpoint:'/calendar',
        title:'calendar',
    },
];
// const q1=`{books{_id,author,title}}`;
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        //configure-pages
        
        //build-working-memory
        this.state = {
            id:Context,
            // property1:propertySetter(context,'property1','default'),
        };
    }
    render() {
        const links=Links.map((item,index)=>{
            return (
                <div key={index}>
                    <Link to={item.endpoint}>{item.title}</Link>
                </div>
            );
        });
        return (
            <div id={Context}>
                <div className="title">{Context}</div>
                <div className="content">{links}</div>
            </div>
        );
    }
}
