//packages
import React from 'react';
//components
import { Hairdos } from './hairdos';
//styles
import './styles/services.css';
//main
const Context='Services';
export default class Services extends React.Component{
    render(){
        const view1=Hairdos.map((item,index)=>{
            return (
                <div key={index} className="hairdo-panel">
                    <div className="hairdo-name">{item.name}</div>
                    <div className="hairdo-type">{item.type}</div>
                    <div className="hairdo-description">{item.description}</div>
                    <div className="hairdo-duration">{item.minDuration}-{item.maxDuration}min</div>
                </div>
            );
        });
        return (
            <div id={Context}>
                <div className='title'>{Context}</div>
                <div className='content'>{view1}</div>
            </div>
        );
    }
}