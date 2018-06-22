//packages
import React from 'react';
import { Link } from 'react-router-dom';
//components
import { Hairdos } from './_hairdos';
//styles
import './styles/services.css';
//main
export default class Services extends React.Component{
    _bookService(a1){
        console.log(a1);
    }
    render(){
        const view1=Hairdos.map((item,index)=>{
            return (
                <div key={index} className='hairdo-panel' onClick={this._bookService.bind(this,item)}>
                    <div className='hairdo-name'><Link to={`/service/${item.name}`}>{item.name.replace(/-/g,' ')}</Link></div>
                    <div className='hairdo-type'>£{item.price_range}</div>
                    <div className='hairdo-description'>{item.description}</div>
                    <div className='hairdo-duration'>{item.minDuration}-{item.maxDuration}min</div>
                </div>
            );
        });
        return (
            <div id='Services'>
                <div className='title'>Services</div>
                <div className='content'>{view1}</div>
            </div>
        );
    }
}