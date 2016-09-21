import React from 'react';
import ReactDOM from 'react-dom';

import { Tracker } from 'meteor/tracker';

import Animation from '../components/Animation.jsx';
import Landing from '../components/Landing.jsx';
import Timeline from '../components/Timeline.jsx';

export default class HomeContainer extends React.Component {

    constructor(){
        super();
        if(Meteor.isClient){
            Session.set("animationStatus", "home");
            Session.set("animationStop", false);
            this.handleScroll = this.handleScroll.bind(this);
            this.updateProgress = this.updateProgress.bind(this);
            this.leaveHome = this.leaveHome.bind(this);
            this.leaveAnimation = this.leaveAnimation.bind(this);
            this.scrollValue = 0;
            this.state = {
                orientation:"h"
            };
            this.templateDictionary = new ReactiveDict();
            this.templateDictionary.set({
                "windowWidth":window.innerWidth,
                "windowHeight":window.innerHeight
            });
            this.handleResize = this.handleResize.bind(this);
        }
    }

    componentDidMount(){
        if(Meteor.isClient){
            $("#react-root").mousewheel(this.handleScroll);
            /* RESPONSIVE SVG ORIENTATION */
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
            /* /RESPONSIVE SVG ORIENTATION */
            //SWIPE DOWN
            this.mc = new Hammer.Manager(document.getElementById("react-root"), {
                recognizers: [
                    [Hammer.Pan,{ direction: Hammer.DIRECTION_VERTICAL }]//,
                    //[Hammer.Swipe,{ direction: Hammer.DIRECTION_VERTICAL }]
                ]
            });
            this.mc.set({ enable: true });
            this.maxVelocity = 0;
            this.mc.on('pan', (e)=> {
                e.preventDefault();
                if(e.deltaY<0 && Session.get("animationStatus") == "home"){
                    let distance = e.distance;
                    let opacity = 1-(distance/800);
                    if(e.velocityY>this.maxVelocity){
                        this.maxVelocity = e.velocityY;
                    }
                    TweenLite.to($(".landingWrapper .content .movingPart"), 0.01, {y:-distance}); //Content up
                    TweenLite.to($(".landingWrapper"), 0.01, {autoAlpha:opacity}); //Content up
                    TweenLite.to($(".landingContainer .arrowDown .arrow"), 0.01, {y:distance/100 * 2, ease:Power0.easeNone});
                    TweenLite.to($(".landingContainer .arrowDown rect"), 0.01, {css:{height:(distance/100 * 2)+ 20.9}, ease:Power0.easeNone});//Arrow down goes down
                }else if(Session.get("animationStatus") == "paused" && Session.get("animationStop")){//In a planned pause (active scroll)
                    let progress = mainTl.progress();
                    let speed = -e.velocityY;
                    let distance = speed / 4000;

                    if(speed<0 && this.scrollValue>=-800 && this.scrollValue<=0){//going forward
                        this.scrollValue = this.scrollValue + speed*100;
                        if(this.scrollValue<-800){//treshold
                            this.scrollValue = 0;
                            Session.set("animationStatus", "playing");
                            Session.set("animationStop", false);
                            mainTl.play();
                        }else{//move progress
                             mainTl.progress(-distance+progress);//Go further in timeline
                             mainTl.pause();
                        }
                    }else if(speed>=0 && this.scrollValue>=-800){//going backward
                        this.scrollValue = this.scrollValue + speed*100;
                        if(this.scrollValue>0){//Normalize max
                            this.scrollValue = 0;
                        }else{
                            mainTl.progress(-distance+progress);//Rewind timeline
                            mainTl.pause();
                        }
                    }
                }
            });

            this.mc.on('panend', (e)=> {
                if(Session.get("animationStatus") == "home"){
                    if(this.maxVelocity>1.7 && e.distance>150){
                        this.maxVelocity = 0;
                        this.leaveHome();
                    }else{
                        TweenLite.to($(".landingWrapper"), 0.6, {css:{display:"block"}, ease:Power0.easeNone})
                        TweenLite.to($(".landingContainer .arrowDown .arrow"), 0.6, {y:0, ease:Power0.easeNone});//Arrow down goes down
                        TweenLite.to($(".landingContainer .arrowDown rect"), 0.6, {css:{height:20.9}, ease:Power0.easeNone});//Arrow down goes down
                        TweenLite.to($(".landingWrapper"), 0.6, {autoAlpha:1, ease:Power0.easeNone}); //Fade landing page
                        TweenLite.to($(".landingWrapper .content .movingPart"), 0.6, {y:0}); //Content up
                        this.scrollValue=0;
                    }
                }else if(Session.get("animationStatus") == "paused" && Session.get("animationStop")){//In a planned pause (active scroll)

                }
            });

            /*this.mc.on('swipedown', (e)=> {
                this.maxVelocity = 0;
                this.scrollValue = 0;
                this.leaveHome();
            });*/

            $(".landingWrapper").on("mousedown", function(){
                $(".landingWrapper").addClass("grabbing");
            });
            $(".landingWrapper").on("mouseup", function(){
                $(".landingWrapper").removeClass("grabbing");
            });
        }
        //TweenLite.to($(".animationLoadingMask"), 0.3, {autoAlpha:0});
    }

    componentDidUpdate(){
        if(Meteor.isClient && Session.get("animationStatus") == "home"){
            this.scrollAmount = 0;
        }
    }

    componentWillUnmount() {
        if(Meteor.isClient){
            $("#react-root").unmousewheel(this.handleScroll);
            //this.mc.set({enable:false});
            this.mc.destroy(); //try to remove it
            $(".landingWrapper").unbind("mousedown");
            $(".landingWrapper").unbind("mouseup");
            /* RESPONSIVE SVG ORIENTATION */
            window.removeEventListener('resize', this.handleResize);
            /* /RESPONSIVE SVG ORIENTATION */
        }
    }

    handleScroll(e) {
        e.preventDefault();
        if(Session.get("animationStatus") == "home"){
            if(e.deltaY<0 && this.scrollValue>-800){
                //Scroll Down
                this.scrollValue = this.scrollValue + (e.deltaY * e.deltaFactor); //Increment scrollValue
                if(this.scrollValue<-800){//Normalize Minimum
                    this.scrollValue = -800;
                }
                let opacity = 1-(-this.scrollValue/800); //Turn scroll Value into opacity
                TweenLite.to($(".landingContainer .arrowDown rect"), 0.01, {css:{height:(-this.scrollValue/100 * 2)+ 20.9}, ease:Power0.easeNone});//Arrow down goes down
                TweenLite.to($(".landingContainer .arrowDown .arrow"), 0.01, {y:-this.scrollValue/100 * 2 , ease:Power0.easeNone});//Arrow down goes down
                TweenLite.to($(".landingWrapper"), 0.1, {autoAlpha:opacity, ease:Power0.easeNone}); //Fade landing page
                TweenLite.to(this.refs.landing.refs.movingPart, 0.3, {y:this.scrollValue/1.2}); //Content up
                if(this.scrollValue<=-800){//Pass Treshold -> fire animation
                    setTimeout(()=>{
                       mainTl.play();
                       this.scrollValue = 0;
                       setTimeout(()=>{
                            mainTl.play();
                        },50);
                    },200);
                    Session.set("animationStatus", "playing");
                    Session.set("animationStop", false);
                    $(".animNavContainer").removeClass("hidden");
                }
            }else if(e.deltaY>0 && this.scrollValue < 0){
                //Scroll Up
                this.scrollValue = this.scrollValue + (e.deltaY * e.deltaFactor); //Decrement scrollValue
                if(this.scrollValue>0){//Normalize max
                    this.scrollValue = 0;
                }
                let opacity = 1-(-this.scrollValue/800); //Turn scroll Value into opacity
                TweenLite.to($(".landingContainer .arrowDown rect"), 0.01, {css:{height:(-this.scrollValue/100 * 2)+ 20.9}, ease:Power0.easeNone});//Arrow down goes down
                TweenLite.to($(".landingContainer .arrowDown .arrow"), 0.01, {y:-this.scrollValue/100 *2, ease:Power0.easeNone});//Arrow down goes down
                TweenLite.to($(".landingWrapper"), 0.1, {autoAlpha:opacity, ease:Power0.easeNone}); //Fade landing page
                TweenLite.to($(".landingWrapper .content .movingPart"), 0.3, {y:this.scrollValue/1.2}); //Content up
            }
        }else if(Session.get("animationStatus") == "paused" && Session.get("animationStop")){//In a planned pause (active scroll)
            let distance = (e.deltaY*e.deltaFactor)/400000;
            let progress = mainTl.progress(); //TimelineProgress
            if(e.deltaY < 0 && this.scrollValue>=-800 && this.scrollValue<=0){//scroll down
                this.scrollValue = this.scrollValue + (e.deltaY * e.deltaFactor);//ScrollValue (MIN MAX handling)
                if(this.scrollValue<-800){//treshold
                    this.scrollValue = 0;
                    Session.set("animationStatus", "playing");
                    Session.set("animationStop", false);
                    mainTl.play();
                }else{//move progress
                     mainTl.progress(-distance+progress);//Go further in timeline
                     mainTl.pause();
                }
            }else if(this.scrollValue<=0 && this.scrollValue>=-800){//scroll up
                this.scrollValue = this.scrollValue + (e.deltaY * e.deltaFactor);//ScrollValue (MIN MAX handling)
                if(this.scrollValue>0){//Normalize max
                    this.scrollValue = 0;
                }else{
                    mainTl.progress(-distance+progress);//Rewind timeline
                    mainTl.pause();
                }
            }
            //console.log(this.scrollValue);
        }
    }

    handleResize(e){
        /* RESPONSIVE SVG ORIENTATION */
        this.templateDictionary.set({
            "windowWidth":window.innerWidth,
            "windowHeight":window.innerHeight,
            "svgW":this.refs.animation.refs.objects.refs.svg.getBoundingClientRect().width,
            "svgH":this.refs.animation.refs.objects.refs.svg.getBoundingClientRect().height,
            "marge":Session.get("sideMarges")
        });
        if(this.templateDictionary.get("svgW")<(this.templateDictionary.get("windowWidth")-this.templateDictionary.get("marge"))){
            this.setState({orientation:"w"});//console.log("w");
        }else if(this.templateDictionary.get("svgH")<(this.templateDictionary.get("windowHeight")-87)){
            this.setState({orientation:"h"});//console.log("h");
        }
        /* /RESPONSIVE SVG ORIENTATION */
    }

    leaveHome(){
        TweenLite.to($(".landingContainer .arrowDown .arrow"), 0.6, {y:16, ease:Power0.easeNone});//Arrow down goes down
        TweenLite.to($(".landingContainer .arrowDown rect"), 0.6, {/*css:{height:36.9}*/scaleY:1.66, ease:Power0.easeNone});//Arrow down goes down
        TweenLite.to($(".landingWrapper"), 0.6, {autoAlpha:0, ease:Power0.easeNone}); //Fade landing page
        TweenLite.to($(".landingWrapper .content .movingPart"), 0.6, {y:-666}); //Content up
        TweenLite.to($(".landingWrapper"), 0.6, {css:{display:"none"}, ease:Power0.easeNone, onComplete:()=>{
            setTimeout(()=>{
                mainTl.play();
                this.scrollValue = 0;
                setTimeout(()=>{
                    mainTl.play();
                },50);
            },200);
            Session.set("animationStatus", "playing");
            $(".animNavContainer").removeClass("hidden");
        }})
    }

    leaveAnimation(){
        Session.set("animationStatus", "home");
        mainTl.pause();
        mainTl.seek(0);
        $(".animNavContainer").addClass("hidden");
        TweenLite.to($(".landingWrapper"), 0.6, {css:{display:"block"}, ease:Power0.easeNone})
        TweenLite.to($(".landingContainer .arrowDown .arrow"), 0.6, {y:0, ease:Power0.easeNone});//Arrow down goes down
        TweenLite.to($(".landingContainer .arrowDown rect"), 0.6, {/*css:{height:20.9}*/scaleY:1, ease:Power0.easeNone});//Arrow down goes down
        TweenLite.to($(".landingWrapper"), 0.6, {autoAlpha:1, ease:Power0.easeNone}); //Fade landing page
        TweenLite.to($(".landingWrapper .content .movingPart"), 0.6, {y:0}); //Content up
        this.scrollValue=0;
    }

    updateProgress(frame){
        this.refs.timeline.updateProgress(frame);
    }

    render() {
        /* RESPONSIVE SVG ORIENTATION */
        let objectsContainerClass = "homeContainer fromH";
        if(Meteor.isClient){
            if(this.state.orientation == "h"){
                objectsContainerClass = "homeContainer fromH";
            }else{
                objectsContainerClass = "homeContainer fromW";
            }
        }
        /* /RESPONSIVE SVG ORIENTATION */
        /* META DATA +i18n.__('common.home.pageTitle') */
        DocHead.setTitle('Talk - '+i18n.__('common.page.home'));
        /* /META DATA */
        return(
            <div className="wrapper homeWrapp">
                <div className="animNavContainer hidden">
                    <Timeline leave={this.leaveAnimation} ref='timeline' />
                </div>
                <div className={objectsContainerClass}>

                    <div className="landingWrapper">
                        <Landing ref="landing" leaveHome={this.leaveHome}  />
                    </div>

                    {/*<div className='animationLoadingMask'></div>*/}

                    <div className="animationWrapper">
                        <Animation updateTimeline={this.updateProgress} ref='animation' />
                    </div>

                </div>
            </div>
        )
    }
}