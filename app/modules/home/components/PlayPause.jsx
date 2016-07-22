import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

export default class PlayPause extends React.Component {

    constructor(props){
        super(props);
        this.pause = this.pause.bind(this);
        this.handleSpacebar = this.handleSpacebar.bind(this);
    }

    componentDidMount(){
        window.addEventListener('keydown', this.handleSpacebar);
        if(Meteor.isClient){
            this.reactivity = Tracker.autorun(()=>{
                if(Session.get("animationStatus") != "home"){
                    if(Session.get("animationStatus") == "playing"){
                        TweenLite.to(this.refs.p1, 0.2, {morphSVG:this.refs.p1_origin});
                        TweenLite.to(this.refs.p2, 0.2, {morphSVG:this.refs.p2_origin});
                    }else{
                        TweenLite.to(this.refs.p1, 0.2, {morphSVG:this.refs.p1_2});
                        TweenLite.to(this.refs.p2, 0.2, {morphSVG:this.refs.p2_2});
                    }
                }
            });
        }
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleSpacebar);
        if(Meteor.isClient){
            this.reactivity.stop();
        }
    }

    handleSpacebar(e){
        if(e.code == "Space" || e.keyCode == 32){
            this.pause();
        }
    }

    pause(){
        if(Session.get("animationStatus") == "paused"){
            mainTl.play();
            Session.set("animationStatus", "playing");
            TweenLite.to(this.refs.p1, 0.2, {morphSVG:this.refs.p1_origin});
            TweenLite.to(this.refs.p2, 0.2, {morphSVG:this.refs.p2_origin});
            if(Session.get("animationStop"))
                Session.set("animationStop", false);
        }else{
            mainTl.pause();
            Session.set("animationStatus", "paused");
            TweenLite.to(this.refs.p1, 0.2, {morphSVG:this.refs.p1_2});
            TweenLite.to(this.refs.p2, 0.2, {morphSVG:this.refs.p2_2});
        }
    }

    render() {


        return(
            <div className='playPauseContainer' onClick={this.pause}>
                <svg version="1.1" id="PlayPauseSVG" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     width="45.7px" height="52px" viewBox="0 0 45.7 52" enableBackground="new 0 0 45.7 52" xmlSpace="preserve">
                    <path id="p2" ref='p2' fill="#FFFFFF" d="M26,0l19.7,0v52H26V0z"/>
                    <path id="p1" ref='p1' fill="#FFFFFF" d="M0,0l19.7,0v52H0L0,0z"/>
                    <path className='hidden' ref='p2_origin' fill="#FFFFFF" d="M26,0l19.7,0v52H26V0z"/>
                    <path className='hidden' ref='p1_origin' fill="#FFFFFF" d="M0,0l19.7,0v52H0L0,0z"/>
                    <polygon className='hidden' id="p2_2" ref='p2_2' fill="#FFFFFF" points="19.7,11.4 45,26 45,26 19.7,40.6 "/>
                    <polygon className='hidden' id="p1_2" ref='p1_2' fill="#FFFFFF" points="0,0 20.4,11.8 20.4,40.2 0,52 "/>
                </svg>
            </div>
        )
    }
}