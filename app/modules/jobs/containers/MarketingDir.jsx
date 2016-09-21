import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Arrow from '../../core/components/Arrow.jsx';
import Footer from '../components/Footer.jsx';
import JobNavigation from '../components/JobNavigation.jsx';

const T = i18n.createComponent();

export default class MarketingDir extends React.Component{
    constructor() {
        super();
        this.changeOffer = this.changeOffer.bind(this);
        this.postform = this.postform.bind(this);
        this.postuler = this.postuler.bind(this);
        this.changeOfferActive = false;
        this.prevDistance = 0;
        this.state = {
            postFormActive:false,
            packed:false,
            postFormError:"none",
            postFormSuccess:false
        }
        if(Meteor.isClient){
            Session.set("inJobs", true);//new
            Session.set("changeOfferActive", false);//new
        }
    }

    componentDidMount() {
        if(Meteor.isClient){
            createScroll();
            $(".loadState").removeClass("loadState");
            const transitionTl = new TimelineMax();
            transitionTl
                .add("apparition")
                .set([this.refs.line1, this.refs.line2, this.refs.line3, this.refs.line4], {drawSVG:"0% 0%", autoAlpha:1}, "apparition")
                .set([this.refs.dot, this.refs.dot2], {scale:0, transformOrigin:"50% 50%", autoAlpha:1}, "apparition")
                .to([this.refs.line1, this.refs.line2, this.refs.line3, this.refs.line4], 4, {drawSVG:"0% 100%", ease:Power2.easeInOut}, "apparition+=0.3")
                .to([this.refs.dot, this.refs.dot2], 0.3, {scale:1, ease:Back.easeOut.config(1.7)}, "apparition+=0.3")
            ;
        }
    }

    componentWillUnmount() {
        if(Meteor.isClient){
            removeScroll();
            Session.set("inJobs", false);
        }
    }

    goUp(){
        TweenLite.to($(".mainContainer"), 0.3, {scrollTo:0})
    }

    close(){
        TweenLite.to($(".singleJobContainer>div>div, .outlineContainer"), 0.2, {autoAlpha:0});
        TweenLite.to($(".singleJobContainer .heading"), 0.2, {css:{background:"#220342"}, onComplete:()=>{
            if(Session.get('fromContact')){
                FlowRouter.go("contact");
            }else{
                FlowRouter.go("agency");
            }
        }});
    }

    changeOffer(job, offer){
        this.newOffer = offer;
        Session.set("nextPage", this.newOffer);
        let i = 0;
        _.each(this.refs.jobNav.refs, (item)=>{
            i++;
            if(i==job){ //clicked on this job
                const bg = $(item).find(".bg");//find image
                const filter = $(item).find(".filter");
                const indicator = $(item).find(".scrollIndicator");
                const changeOfferTl = new TimelineMax({onStart:()=>{//set maxScroll
                    this.changeOfferActive = true;
                    Session.set("changeOfferActive", true);//new
                    Session.set("maxScroll", scrollBar[0].scrollTop + bg.offset().top);
                    this.maxScroll = -this.scrollAmount + bg.offset().top;
                }});

                changeOfferTl//animation
                    .add("changeOffer")
                    .set([bg, filter, indicator], {css:{display:"block"}}, "changeOffer")
                    .to(item, 0.3, {css:{background:"#f36c23"}}, "changeOffer+=0.1")
                    .to(item, 0.3, {css:{height:"100vh", marginBottom:"196px"}}, "changeOffer")
                    .to([bg, filter], 0.3, {autoAlpha:1}, "changeOffer")
                    .to(indicator, 0.3, {autoAlpha:0.8}, "changeOffer")
                ;
            }
        });
    }

    postform(){
        if(!this.state.postFormActive){
            const postTl = new TimelineMax();

            postTl
                .add("form")
                .set(this.refs.postForm, {height:"auto"}, "form")
                .from(this.refs.postForm, 0.3, {height:0}, "form")
                .to(this.refs.postContent, 0.5, {autoAlpha:1}, "form+=0.3")
            ;
            this.setState({
                postFormActive:true
            });
        }
    }

    postuler(e){
        e.preventDefault();
        const name = this.refs.name.value,
              email = this.refs.email.value,
              msg = this.refs.message.value,
              cv = $("input.realFile")[0].files;
        if(name!="" && email!="" && msg!="" && cv!=""){
            this.setState({
                loading:true,
                postFormError:"none",
                postFormSuccess:false
            });

            S3.upload({
                files:cv,
                path:"cv",
                unique_name:false
            },(e,r)=>{
                if(r.status == "complete"){
                    this.setState({
                        postFormSuccess:true,
                        loading:false
                    });
                    Meteor.call("sendJob", email, name, msg, r.secure_url);
                    this.refs.name.value = "";
                    this.refs.email.value = "";
                    this.refs.message.value = "";
                    document.getElementById("postForm").reset();
                }else{
                    this.setState({
                        postFormError:"failed",
                        loading:false
                    });
                }
            });
        }else{
            this.setState({
                postFormError:"empty",
                postFormSuccess:false
            });
        }
    }

    render() {
        /* META DATA */
        DocHead.setTitle('Talk - Directeur Marketing');
        /* /META DATA */
        let formError = this.state.postFormError == "empty" ? <p className='error'><T>common.error.error</T></p> : <div></div>;
        if(formError == <div></div>){
            formError = this.state.postFormError == "failed" ? <p className='error'><T>common.error.failed</T></p> : <div></div>;
        }

        const formSuccess = this.state.postFormSuccess ? <p className='success'><T>common.error.jobSuccess</T></p> : <span className='note'><T>common.motionDesigner.form.note</T></span>;

        const loading = this.state.loading ? <div className='loading'></div> : <div></div>;
        return(
            <div className='singleJobContainer marketingDir'>
                <div className='heading'>
                    <div className='close' onClick={this.close}><T>common.motionDesigner.buttonClose</T> <img src="/images/closeX.svg" /></div>
                    <div className='filter'></div>
                    <ReactCSSTransitionGroup
                        component='div'
                        className='content loadState'
                        transitionName='contentLoad'//class
                        transitionAppearTimeout={600}
                        transitionEnterTimeout={600}//time to enter
                        transitionLeaveTimeout={400}//Time to leave
                        transitionAppear={true}
                        >
                        <div className='titleLine'></div>
                        <h1><T>common.motionDesigner.tag</T></h1>
                        <p className='hook'><T>common.team.jobs.jobMarkTitle</T></p>
                    </ReactCSSTransitionGroup>
                    <div className='lineContainer'>

                    </div>
                    <div className='outlineContainer'>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             width="901px" height="830.2px" viewBox="0 0 901 830.2" enableBackground="new 0 0 901 830.2" xmlSpace="preserve" className='desktop'>
                            <polyline ref='line1' fill="none" stroke="#FFFFFF" strokeMiterlimit="10" points="451,7.6 451,274.6 892,274.6 892,820.6 450.5,820.6 "/>
                            <polyline ref='line2' fill="none" stroke="#FFFFFF" strokeMiterlimit="10" points="450,7.6 450,274.6 9,274.6 9,820.6 450.5,820.6 "/>
                            <circle fill="#FFFFFF" ref="dot" cx="450.5" cy="4" r="4"/>
                        </svg>
                        <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             width="8px"  height="200.6px" viewBox="0 0 8 200.6" enableBackground="new 0 0 8 200.6" xmlSpace="preserve" className='mobile'>
                            <line ref='line3' fill="none" stroke="#FFFFFF" strokeMiterlimit="10" x1="4.5" y1="7.6" x2="4.5" y2="200.6"/>
                            <line ref='line4' fill="none" stroke="#FFFFFF" strokeMiterlimit="10" x1="3.5" y1="7.6" x2="3.5" y2="200.6"/>
                            <circle ref="dot2" fill="#FFFFFF" cx="4" cy="4" r="4"/>
                        </svg>
                    </div>
                </div>

                <div className='content'>
                    <div className='intro'>
                        <div className='info'>
                            <p className='title'><T>common.motionDesigner.intro.t1</T></p>
                            <p className='value'><T>common.directeurMarketing.intro.l1</T></p>
                        </div>
                        <div className='info'>
                            <p className='title'><T>common.motionDesigner.intro.t5</T></p>
                            <p className='value'><T>common.directeurMarketing.intro.l5</T></p>
                        </div>
                        <div className='info'>
                            <p className='title'><T>common.motionDesigner.intro.t4</T></p>
                            <p className='value'><T>common.directeurMarketing.intro.l4</T></p>
                        </div>
                        <div className='info'>
                            <p className='title'><T>common.motionDesigner.intro.t6</T></p>
                            <p className='value'><T>common.directeurMarketing.intro.l6</T></p>
                        </div>
                        <div className='info'>
                            <p className='title'><T>common.motionDesigner.intro.t3</T></p>
                            <p className='value'><T>common.directeurMarketing.intro.l3</T></p>
                        </div>
                        <div className='info'>
                            <p className='title'><T>common.motionDesigner.intro.t7</T></p>
                            <p className='value'><T>common.directeurMarketing.intro.l7</T></p>
                        </div>
                        <div className='info'>
                            <p className='title'><T>common.motionDesigner.intro.t2</T></p>
                            <p className='value'><T>common.directeurMarketing.intro.l2</T></p>
                        </div>
                    </div>
                    <div className='description'>
                        <h5><T>common.motionDesigner.jobDescMotion.title</T></h5>
                        <h6><T>common.directeurMarketing.jobDescMark.profile.title</T></h6>
                        <ul>
                            <li><T>common.directeurMarketing.jobDescMark.profile.l1</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.profile.l2</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.profile.l3</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.profile.l4</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.profile.l5</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.profile.l6</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.profile.l7</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.profile.l8</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.profile.l9</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.profile.l10</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.profile.l11</T></li>
                        </ul>
                        <h6><T>common.directeurMarketing.jobDescMark.bonus.title</T></h6>
                        <ul>
                            <li><T>common.directeurMarketing.jobDescMark.bonus.l1</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.bonus.l2</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.bonus.l3</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.bonus.l4</T></li>
                        </ul>
                        <h6><T>common.directeurMarketing.jobDescMark.responsabilites.title</T></h6>
                        <ul>
                            <li><T>common.directeurMarketing.jobDescMark.responsabilites.l1</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.responsabilites.l2</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.responsabilites.l3</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.responsabilites.l4</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.responsabilites.l5</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.responsabilites.l6</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.responsabilites.l7</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.responsabilites.l8</T></li>
                            <li><T>common.directeurMarketing.jobDescMark.responsabilites.l9</T></li>
                        </ul>
                        <h6><T>common.directeurMarketing.jobDescMark.work.title</T></h6>
                        <p><T>common.directeurMarketing.jobDescMark.work.l1</T></p>
                        <p><T>common.directeurMarketing.jobDescMark.work.l2</T></p>
                        <h5><T>common.motionDesigner.workAtTalk.title</T></h5>
                        <ul>
                            <li><T>common.motionDesigner.workAtTalk.l1</T></li>
                            <li><T>common.motionDesigner.workAtTalk.l2</T></li>
                            <li><T>common.motionDesigner.workAtTalk.l3</T></li>
                            <li><T>common.motionDesigner.workAtTalk.l4</T></li>
                            <li><T>common.motionDesigner.workAtTalk.l5</T></li>
                            <li><T>common.motionDesigner.workAtTalk.l6</T></li>
                            <li><T>common.motionDesigner.workAtTalk.l7</T></li>
                        </ul>
                        <div className='cta'>
                            <p><T>common.motionDesigner.cta.title</T></p>
                            <button onClick={this.postform}><T>common.motionDesigner.cta.button</T> <Arrow orientation='right' /></button>
                        </div>
                    </div>
                </div>

                <div className='postForm' ref='postForm'>
                    <div className='postWrapper' ref='postContent'>
                        <span className='formTitle'><T>common.team.jobs.jobMarkTitle</T></span>
                        {formError}
                        <form id='postForm'>
                            <div className='row'>
                                <div className='input-field'>
                                    <input type='text' ref='name' id='name' />
                                    <label htmlFor="name"><T>common.motionDesigner.form.name</T></label>
                                </div>
                                <div className='input-field'>
                                    <input type='email' ref='email' id='email' />
                                    <label htmlFor="email"><T>common.motionDesigner.form.courriel</T></label>
                                </div>
                                <div className='input-field'>
                                    <textarea className='materialize-textarea' ref='message' id='msg'></textarea>
                                    <label htmlFor="msg"><T>common.motionDesigner.form.message</T> <span className='precision'><T>common.motionDesigner.form.tip</T></span></label>
                                </div>
                                <div className='file-field input-field'>
                                    <div className="file-path-wrapper">
                                        <input className="file-path" type="text" />
                                    </div>
                                    <div className="semiShadow cvButton">
                                        <span>Curriculum vitæ <Arrow orientation='right' /></span>
                                        <input type="file" ref='file' className='realFile' />
                                    </div>
                                </div>
                                <button className='semiShadow' onClick={this.postuler}><T>common.motionDesigner.form.button</T> <Arrow orientation="right" /></button>
                                {loading}
                                {formSuccess}
                            </div>
                        </form>
                    </div>
                </div>

                <JobNavigation ref='jobNav' changeOffer={this.changeOffer} current='directeurMarketing' />

                <Footer goUp={this.goUp} close={this.close} />
            </div>
        )
    }
}