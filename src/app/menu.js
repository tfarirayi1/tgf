//packages
import React from 'react';
import { Link } from 'react-router-dom';
//styles
import './styles/menu.css';
//main-code
const Context='Menu';        
const Links=[
    {
        endpoint:'/services',
        title:'services',
    },{
        endpoint:'/stylists',
        title:'stylists',
    },{
        endpoint:'/help',
        title:'help',
    },{
        endpoint:'/account',
        title:'account',
    }
];
export default class Menu extends React.Component{
    render(){
        const links=Links.map((item,index)=>{
            return(
                <div key={index}>
                    <Link to={item.endpoint}>{item.title}</Link>
                </div>
            );
        });

        return(
            <div id={Context}>
                <div className='title'>{Context}</div>
                <div className='content'>
                    {links}
                </div>
            </div>
        );
    }
}
