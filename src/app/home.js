//packages
import React from 'react';
import { Link } from 'react-router-dom';
import History from './_history.js'
import './styles/home.css';
//code
const Context='Home';
const Menu=[
    {
        endpoint:'/services',
        title:'services',
    },
    {
        endpoint:'/stylists',
        title:'stylists',
    },
    {
        endpoint:'/book',
        title:'book',
    }
];
// const q1=`{books{_id,author,title}}`;
var gretel;
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        //build-working-memory
        this.state = {
            id:Context,
            property1:History.load_history.call(this,'property1','default'),
        };
    }
    newPage(){
        this.setState({property2:gretel++});
    }
    render() {
        const links=Menu.map((item,index)=>{
            return (
                <div key={index}>
                    <Link to={item.endpoint}>{item.title}</Link>
                </div>
            );
        });
        return (
            <div id={Context}>
                <div className="title" onClick={e=>this.newPage()}>{Context}</div>
                <div className="content">{links}</div>
            </div>
        );
    }
}
