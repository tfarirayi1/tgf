//packages
import React from 'react';
import image1 from './images/render1.png';
import image2 from './images/render2.png';
import image3 from './images/render3.png';
import image4 from './images/render4.png';
import image5 from './images/render5.png';
import './styles/studio.css';
const slides1=[image1,image2,image3,image4,image5];
//code
export default class Studio extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentImage:image1
        };
    }
    _nextSlide(propertyName,states){
        //update-the-state-of-a-property
        this.setState((prevState)=>{
            let nextState={};
            let currentState=prevState;
            for(let i=0;i<states.length;i++){
                if(currentState[propertyName]===states[i]){
                    if(i===states.length-1){
                        nextState[propertyName]=states[0];
                        break;
                    }
                    nextState[propertyName]=states[i+1];
                    break;
                }
            }
            return nextState;
        });
    }
    _previousSlide(propertyName,states){
        this.setState((prevState)=>{
            let nextState={};
            let currentState=prevState;
            for(let i=0;i<states.length;i++){
                if(currentState[propertyName]===states[i]){
                    if(i===0){
                        nextState[propertyName]=states[states.length-1];
                        break;
                    }
                    nextState[propertyName]=states[i-1];
                    break;
                }
            }
            return nextState;
        });
    }
    render(){
        const slides=[image1];
        const project1=(
            <div className="studio_slider">
                <div className="studio_slider_image">
                    <img className="studio_image" alt="image1" src={this.state.currentImage}/>
                </div>
                <div className="studio_slider_bottom">
                    <div className="studio_slider_nav">
                        <div className="studio_slider_button back" tabIndex="0" onClick={this._previousSlide.bind(this,'currentImage',slides1)}>back</div>
                        <div className="studio_slider_button forward" tabIndex="0" onClick={this._nextSlide.bind(this,'currentImage',slides1)}>forward</div>
                    </div>
                    <div className="studio_slider_text">Description</div>
                </div>
            </div>
        );
        return(
            <div className="studio">
                {project1}
            </div>
        );
    }
}