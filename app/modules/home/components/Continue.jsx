import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import Arrow from '../../core/components/Arrow.jsx';

const T = i18n.createComponent();

export default class Continue extends React.Component {
    constructor(){
        super();
        this.continue = this.continue.bind(this);
    }

    componentDidMount(){
        if(Meteor.isClient){
            this.reactivity = Tracker.autorun(()=>{
                if(Session.get("animationStop")){
                    TweenLite.to(this.refs.component, 0.2, {autoAlpha:1});
                }else{
                    TweenLite.to(this.refs.component, 0.2, {autoAlpha:0});
                }
            });
        }
    }

    componentWillUnmount(){
        if(Meteor.isClient){
            this.reactivity.stop();
        }
    }

    continue(){
        Session.set("animationStatus", "playing");
        Session.set("animationStop", false);
        mainTl.play();
    }

    render() {
        return(
            <div className='continueContainer' ref='component' onClick={this.continue}>
                <div className='fr'>
                    <img src='/images/anim_continue_fr.svg' className='desktop' alt='go down' />
                    <img src='/images/anim_continue_mobile_fr.svg' className='mobile' alt='go down' />
                </div>
                <div className='en'>
                    <img src='/images/anim_continue_en.svg' className='desktop' alt='go down' />
                    <img src='/images/anim_continue_mobile_en.svg' className='mobile' alt='go down' />
                </div>
            </div>
        )
    }
}