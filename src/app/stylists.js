//packages
import React from 'react';
//styles
import './styles/stylists.css'
//main
const Context='Stylists';
const StylistsList=[
    {
        name:'jenny-bloggs',
        id:'stylist1',
    },{
        name:'jenny-lost',
        id:'stylist2',
    },{
        name:'jenny-trump',
        id:'stylist3',
    },{
        name:'jenny-moore',
        id:'stylist4',
    }
]
export default class Stylists extends React.Component{
    render(){
        const stylists=StylistsList.map((item,index)=>{
            return <div>{item.name}</div>
        });
        return (
            <div id={Context}>
                <div className="title">Stylists</div>
                <div className="content">{stylists}</div>
            </div>
        );
    }
}