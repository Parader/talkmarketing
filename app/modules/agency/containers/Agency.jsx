import React from 'react';
import ReactDOM from 'react-dom';

import TeamSlider from '../components/TeamSlider.jsx';
import Footer from '../../core/containers/Footer.jsx';
import Grid from '../components/Grid.jsx';
import Arrow from '../../core/components/Arrow.jsx';

const T = i18n.createComponent();

export default class Agency extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
        createScroll();
        if(Meteor.isClient){//if from jobs, scroll to last point
            const fromJobs = Session.get("agencyScrollAmount") ? true : false;
            if(fromJobs){
                const fakeLoad = new TimelineLite();
                const $fakeJobContainer = $(".fakeJobContainer");
                //scrollBar.setScrollTop(Session.get("agencyScrollAmount"));
                $(".mainContainer").scrollTop(Session.get("agencyScrollAmount"));
                fakeLoad
                    .set($fakeJobContainer, {css:{top:0}})
                    .to($fakeJobContainer, 0.5, {autoAlpha:0, onComplete:()=>{
                        fakeLoad.set($fakeJobContainer, {css:{top:"100vh"}});
                        fakeLoad.set($fakeJobContainer, {autoAlpha:1});
                        Session.set("agencyScrollAmount", null);
                    }});
            }
        }
    }

    componentWillUnmount(){
        removeScroll();
    }

    goToJob(job){
        let patchPX = 0;
        if(!this.refs.grid.state.canLoadMore){
            patchPX = 1100;
        }
        const agencyScrollAmount = scrollBar[0].scrollTop - patchPX;
        if(job == "motion designer"){
            $(".fakeJobContainer").addClass("motionDesigner");
            TweenLite.to($(".fakeJobContainer"), 0.3, {css:{top:0}, onComplete:()=>{
                Session.set("agencyScrollAmount", agencyScrollAmount);
                FlowRouter.go("/jobs/motion-designer");
            }});
        }else if(job == "front-end"){
            $(".fakeJobContainer").addClass("frontendDev");
            TweenLite.to($(".fakeJobContainer"), 0.3, {css:{top:0}, onComplete:()=>{
                Session.set("agencyScrollAmount", agencyScrollAmount);
                FlowRouter.go("/jobs/frontendDev");
            }});
        }else if(job == "other"){
            $(".fakeJobContainer").addClass("other");
            TweenLite.to($(".fakeJobContainer"), 0.3, {css:{top:0}, onComplete:()=>{
                Session.set("agencyScrollAmount", agencyScrollAmount);
                FlowRouter.go("/jobs/spontaneous-application");
            }});
        }
    }

    render() {
        /* META DATA */
        DocHead.setTitle('Talk - '+i18n.__('common.page.team'));
        /* /META DATA */
        return(
            <span>
                <div className='wrapper' ref='wrapper'>
                    <div className='agencyContainer'>
                        <div className='team section'>
                            <TeamSlider />
                        </div>
                        <div className='ambiance section'>
                            <div className='text'>
                                <h1 className='miniTitle fadefx'><T>common.team.culture.tag</T></h1>
                                <h2 className='fadefx'><T>common.team.culture.title</T></h2>
                                <p className='fadefx'><T>common.team.culture.text</T></p>
                            </div>
                            <div className='image fadefx'>
                                <img src='/images/ambiance.jpg' alt='Ambiance chez Talk' />
                            </div>
                        </div>
                        <div className='moments section'>
                            <h4 className='miniTitle fadefx'><T>common.team.photos.tag</T></h4>
                            <h3 className='fadefx'><T>common.team.photos.title</T></h3>
                            <Grid ref='grid' />
                        </div>
                        <div className='emplois section'>
                            <h4 className='miniTitle fadefx'><T>common.team.jobs.jobTag</T></h4>
                            <h3 className='fadefx'><T>common.team.jobs.jobTitle</T></h3>
                            <div className='row fadefx'>
                                <div className='offreDemplois col l4 s12'>
                                    <div className='offreWrapper'>
                                        <h2 className='title'><T>common.team.jobs.jobMotionTitle1</T><br /><T>common.team.jobs.jobMotionTitle2</T></h2>
                                        <p><T>common.team.jobs.jobMotionText</T></p>
                                        <button className='semiShadow' onClick={()=> this.goToJob("motion designer")}><T>common.team.jobs.jobButton</T> <Arrow orientation="right" /></button>
                                    </div>
                                </div>
                                <div className='offreDemplois col l4 s12'>
                                    <div className='offreWrapper'>
                                        <h2 className='title'><T>common.team.jobs.jobDevTitle1</T><br /><T>common.team.jobs.jobDevTitle2</T></h2>
                                        <p><T>common.team.jobs.jobDevText</T></p>
                                        <button className='semiShadow' onClick={()=> this.goToJob("front-end")}><T>common.team.jobs.jobButton</T> <Arrow orientation="right" /></button>
                                    </div>
                                </div>
                                <div className='offreDemplois col l4 s12'>
                                    <div className='offreWrapper'>
                                        <h2 className='title'><T>common.team.jobs.jobGeneralTitle1</T><br /><T>common.team.jobs.jobGeneralTitle2</T></h2>
                                        <p><T>common.team.jobs.jobGeneralText</T></p>
                                        <button className='semiShadow' onClick={()=> this.goToJob("other")}><T>common.team.jobs.jobGeneralButton</T> <Arrow orientation="right" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
                <div className='fakeJobContainer'>
                    <div className='filter'></div>
                </div>

            </span>
        )
    }
}