//packages
import React from 'react';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import image1 from './images/render1.png';
import image2 from './images/render2.png';
import image3 from './images/render3.png';
import image4 from './images/render4.png';
import image5 from './images/render5.png';
import './styles/studio.css';
//code
const slideList1=[
    {   
        image:image1,
        description:'Zingizi gonyera pamwe, maruva enyika haaperi.',
    },
    {   
        image:image2,
        description:'Mwana asingacheme anofira mumbereko.',
    },
    {   
        image:image3,
        description:'Mwana wamambo muranda kumwe.',
    },
    {   
        image:image4,
        description:'Chembere mukadzi hazvienzani nekurara mugota.',
    },
    {
        image:image5,
        description:'Kandiro kanoenda kunobva kamwe.',
    }
];
export default class Studio extends React.Component{
    constructor(props){
        super(props);
        this.state={
            slideList1:slideList1[0].image
        };
    }
    _nextSlide(a1){
        //eslint-disable-next-line
        const slides=eval(a1);
        let next_slide;
        slides.forEach((item,index)=>{
            if(this.state[a1]===item.image){
                if(slides.length-1===index){
                    return next_slide=slides[0];
                }
                return next_slide=slides[index+1];
            }
        });
        if(next_slide){
            if(next_slide.image){
                let new_state={};
                new_state[a1]=next_slide.image;
                this.setState(()=>new_state);
            }
        }
    }
    _previousSlide(a1){
        //eslint-disable-next-line
        const slides=eval(a1);
        let next_slide;
        slides.forEach((item,index)=>{
            let count=slides.length;
            if(this.state[a1]===item.image){
                if(index===0){
                    return next_slide=slides[count-1];
                }
                return next_slide=slides[index-1];
            }
        });
        if(next_slide){
            if(next_slide.image){
                let new_state={};
                new_state[a1]=next_slide.image;
                this.setState(()=>new_state);
            }
        }
    }
    render(){
        const slideShow1=(
            <div className="slider">
                <div className="slider_navigation">
                    <div className="slider_button --back" tabIndex="0" onClick={this._previousSlide.bind(this,'slideList1')}>
                        <Icon icon="long-arrow-alt-left"/>
                    </div>
                    <div className="slider_button --forward" tabIndex="0" onClick={this._nextSlide.bind(this,'slideList1')}>
                        <Icon icon="long-arrow-alt-right"/>
                    </div>
                </div>
                <div className="slider_viewer">
                    {
                        slideList1.map((item,index)=>{
                            let selected=this.state.slideList1===item.image?true:false;
                            return(
                                <div key={index} className="slider_panel" data-selected={selected}>
                                    <div className="slider_description">{item.description}</div>
                                    <div className="slider_images">
                                        <img className="slider_image" src={item.image} alt="image_name"/>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
        return(
            <div id="Studio">
                {slideShow1}
            </div>
        );
    }
}