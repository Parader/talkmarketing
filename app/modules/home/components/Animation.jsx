import React from 'react';
import ReactDOM from 'react-dom';
import { Score } from '/lib/collections.jsx';
import { Tracker } from 'meteor/tracker';

import Objects from './Objects.jsx';
import Arrow from '../../core/components/Arrow.jsx';
import PlayPause from './PlayPause.jsx';
import Continue from './Continue.jsx';

const T = i18n.createComponent();

export default class Animation extends React.Component {
    constructor(props){
        super(props);
        this.updateProgress = this.updateProgress.bind(this);
        this.plusScore = this.plusScore.bind(this);
        this.state = {
            subscription:{
                score:Meteor.subscribe("animationScore")
            },
            score:0
        }
    }

    componentDidMount(){
        this.scoreTracker = Tracker.autorun(()=>{
            if(this.state.subscription.score.ready())
                this.setState({"score":Score.find().fetch()[0].animationScore});
        });
        let mShare = require('mkg-share');
        new mShare('.shareContainer', {text:false, googleplus:false, reddit:false, pinterest:false, email:false, linkedin:false, phone:false, message:false});
        setTimeout(()=>{
            TweenLite.to(this.refs.animationMask, 0.3, {autoAlpha:0});
        },200);
    }

    componentWillUnmount(){
        this.scoreTracker.stop();
    }

    updateProgress(frame){
        this.props.updateTimeline(frame);
    }

    plusScore(){
        Meteor.call("updateScore", Score.find().fetch()[0]._id);
    }

    render() {

        return(
            <div className="animationContainer">

                <div className='animationLoadingMask' ref='animationMask'></div>

                <PlayPause />

                <Objects updateProgress={this.updateProgress} ref="objects" />

                <Continue />

                <img src='/images/anim_spacebar_fr.svg' className='spaceBarPress fr' alt='Press spacebar to pause' />
                <img src='/images/anim_spacebar_en.svg' className='spaceBarPress en' alt='Press spacebar to pause' />

                <div className="callToAction">
                    <p className='hook' ><T>common.animation.cta.p1</T></p>
                    <a href='/contact'><button><T>common.animation.cta.p2</T> <Arrow orientation='right' /></button></a>
                </div>
                <div className='love'>
                    <div className='loveContainer'>
                        <div className='plusOne' onClick={this.plusScore}>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40.8px"
                                 height="22.7px" viewBox="0 0 40.8 22.7" enableBackground="new 0 0 40.8 22.7" xmlSpace="preserve">
                                <path className='round' fill="#220342" d="M11.3,22.2c-6,0-10.8-4.9-10.8-10.8S5.4,0.5,11.3,0.5h18.1c6,0,10.8,4.9,10.8,10.8s-4.9,10.8-10.8,10.8
                                    H11.3z"/>
                                <path className='outline' fill="#FFFFFF" d="M29.5,1c5.7,0,10.3,4.6,10.3,10.3c0,5.7-4.6,10.3-10.3,10.3H11.3C5.6,21.7,1,17,1,11.3C1,5.6,5.6,1,11.3,1
                                    H29.5 M29.5,0H11.3C5.1,0,0,5.1,0,11.3v0c0,6.2,5.1,11.3,11.3,11.3h18.1c6.2,0,11.3-5.1,11.3-11.3v0C40.8,5.1,35.7,0,29.5,0
                                    L29.5,0z"/>

                                <path fill="#FFFFFF" d="M12.2,12.1h2.7v-3h1v3h2.7V13h-2.7v3h-1v-3h-2.7V12.1z"/>
                                <path fill="#FFFFFF" d="M22.5,15h1.9V9.5c0-0.3,0-0.5,0-0.5h0c0,0-0.1,0.2-0.4,0.5l-0.8,0.8l-0.7-0.7l2-2h1.1V15h1.8v1h-4.9V15z"/>
                            </svg>
                        </div>
                        <span className='lovedIt'><T>common.animation.like.p1</T></span>
                        <div className='score'>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 width="40.8px" height="26.6px" viewBox="0 0 40.8 26.6" enableBackground="new 0 0 40.8 26.6" xmlSpace="preserve">
                                <path fill="#FFFFFF" d="M40.8,11.3c0,3.1-1.3,6-3.3,8c-2.1,2.1-4.9,3.3-8,3.3H12.9C12,23.4,11,24,10.2,24.5
                                    c-0.6,0.3-1.2,0.6-1.7,0.8c-2.5,1.1-4.3,1.3-4.3,1.3V20C1.6,18,0,14.8,0,11.3c0-3.1,1.3-5.9,3.3-8C5.4,1.3,8.2,0,11.3,0h18.1
                                    C35.7,0,40.8,5.1,40.8,11.3z"/>
                                {/*<text transform="matrix(1 0 0 1 16.6475 16.0031)" fill="#200E38">0</text>*/}
                            </svg>
                            <span className='scoreNumber'>{this.state.score}</span>
                        </div>
                    </div>
                    <div className='shareContainer'>
                        <p><T>common.animation.like.p2</T></p>
                        {/*<a href='http://facebook.com' target='_blank'><div className='facebook'></div></a>
                        <a href='http://twitter.com' target='_blank'><div className='twitter'></div></a>*/}


                    </div>
                </div>
            </div>
        )
    }
}