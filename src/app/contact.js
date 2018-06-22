//packages
import React from 'react';
import './styles/contact.css';
//code
export default class Contact extends React.Component{
    render(){
        const form=(
            <div className="contact_form">
                <div className="contact_form_input">
                    <label htmlFor="contact" className="contact_form_label">Phone or Email</label>
                    <input id="contact" className="contact_form_input-box" type="text"/>
                </div>
                <div className="contact_form_input">
                    <label htmlFor="message" className="contact_form_label">Message</label>
                    <textarea id="message" className="contact_form_input-box" cols="11" rows="7"></textarea>
                </div>
            </div>
        )
        return(
            <div className="contact">
                {form}
            </div>
        )
    }
}