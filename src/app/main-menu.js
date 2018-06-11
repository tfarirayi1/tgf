//packages
import React from 'react';
import { Link } from 'react-router-dom';
//styles
import './styles/main-menu.css';
//main-code
const Context='MainMenu';

export default class MainMenu extends React.Component{
    render(){
        
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
