import React from 'react';
import ReactDOM from 'react-dom';

export default class Logo extends React.Component{
    constructor(){
        super();
        this.goHome = this.goHome.bind(this);
    }

    goHome(event){
        event.preventDefault();
        if(FlowRouter.getRouteName() == "home"){
            if(Meteor.isClient){
                Session.set("animationStatus", "home");
            }
            mainTl.pause();
            mainTl.seek(0);
            $(".animNavContainer").addClass("hidden");
            TweenLite.to($(".landingWrapper"), 0.6, {css:{display:"block"}, ease:Power0.easeNone})
            TweenLite.to($(".landingContainer .arrowDown .arrow"), 0.6, {y:0, ease:Power0.easeNone});//Arrow down goes down
            TweenLite.to($(".landingContainer .arrowDown rect"), 0.6, {/*css:{height:20.9}*/scaleY:1, ease:Power0.easeNone});//Arrow down goes down
            TweenLite.to($(".landingWrapper"), 0.6, {autoAlpha:1, ease:Power0.easeNone}); //Fade landing page
            TweenLite.to($(".landingWrapper .content .movingPart"), 0.6, {y:0}); //Content up
        }else{
            FlowRouter.go("/");
        }
    }

    render() {
        return(
            <div>
                <a href='/' onClick={this.goHome}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         width="128px" height="35.8px" viewBox="0 0 128 35.8" enableBackground="new 0 0 128 35.8" xmlSpace="preserve" className='logo'>
                        <path fill="#220C42" d="M10,8H0V0h29v8H19v28h-9C10,36,10,8,10,8z"/>
                        <path fill="#220C42" d="M52,28H41l-2,8h-9L42,0h9l12,36h-9.002L52,28z M46,9l-4,13h9L47,9C47,9,46,9,46,9z"/>
                        <path fill="#220C42" d="M68,0h9v28h15v8H68V0z"/>
                        <path fill="#220C42" d="M98,25v11h8.998V22.006C102.051,24.137,98,25,98,25z M117.775,17.244v-0.005L117,16c-2.213,1.967-7,5-7,5
                            l8.002,15H128L117.775,17.244z"/>
                        <g>
                            <path fill="#F06923" d="M128,0c-1.707,6.416-5.415,11.353-9,15c-0.547,0.556-1.069,0.994-1.634,1.495
                                c-2.243,1.993-4.604,3.568-6.871,4.808c-1.202,0.658-2.378,1.222-3.497,1.703C102.051,25.136,98,26,98,26V0h9v14
                                c0,0,2.61-0.748,5.436-3.577C114.496,8.359,116.643,5.099,118,0H128z"/>
                        </g>
                    </svg>
                </a>
            </div>
        )
    }
}