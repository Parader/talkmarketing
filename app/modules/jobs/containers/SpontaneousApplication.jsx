import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Arrow from '../../core/components/Arrow.jsx';
import Footer from '../components/Footer.jsx';
import JobNavigation from '../components/JobNavigation.jsx';

const T = i18n.createComponent();

export default class SpontaneousApplication extends React.Component{
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
            /*$("body, html").css("overflow", "visible");
            $("#react-root").unmousewheel(this.handleScroll);
            this.mc.destroy();*/
        }
    }

    goUp(){
        TweenLite.to($(".mainContainer"), 0.3, {scrollTo:0});
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
        DocHead.setTitle('Talk - Spontaneous Application');
        /* /META DATA */
        let formError = this.state.postFormError == "empty" ? <p className='error'><T>common.error.error</T></p> : <div></div>;
        if(formError == <div></div>){
            formError = this.state.postFormError == "failed" ? <p className='error'><T>common.error.failed</T></p> : <div></div>;
        }

        const formSuccess = this.state.postFormSuccess ? <p className='success'><T>common.error.jobSuccess</T></p> : <span className='note'><T>common.motionDesigner.form.note</T></span>;

        const loading = this.state.loading ? <div className='loading'></div> : <div></div>;
        return(
            <div className='singleJobContainer spontaneous'>
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
                        <h1><T>common.jobs.spontaneousTag</T></h1>
                        <p className='hook'><T>common.jobs.spontaneous</T></p>
                    </ReactCSSTransitionGroup>
                    <div className='lineContainer'>

                    </div>
                    <div className='lineContainer'>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             width="5.2px" height="196px" viewBox="0 0 5.2 196" enableBackground="new 0 0 5.2 196" xmlSpace="preserve">
                            <line ref='line1' fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="10" x1="2.5" y1="0" x2="2.5" y2="196"/>
                        </svg>
                    </div>
                </div>

                <div className='content'>
                    <div className='description'>
                        <h5>Description du poste</h5>
                        <h6>Ton profil</h6>
                        <ul>
                            <li>Tu es convaincu que ton talent amènerait nos projets encore plus loin.</li>
                            <li>Tu es un team player.</li>
                            <li>Tu es créatif.</li>
                            <li>Tu es autonome et tu sais bien gérer ton stress.</li>
                            <li>Tu es à l’aise dans un environnement en constante évolution.</li>
                            <li>Tu es passionné par l’industrie du numérique et sa formidable évolution.</li>
                            <li>Tu es constamment à l’affut des nouvelles tendances dans ton domaine.</li>
                            <li>Tu maîtrises très bien le français but you can switch to English whenever it’s needed (spoken and written).</li>
                            <li>Tu es une personne passionnée, que ce soit par la musique, l’alimentation, le yoga, le cinéma, la santé, les chats, les cours de tricot, la conception d’une sauce à poutine révolutionnaire, ou par tout ça et plus encore… Bref, on adore les personnes curieuses et enthousiastes.</li>
                            <li>Tu adores la poutine et/ou les sushis. (C’est une blague… ou presque).</li>
                        </ul>
                        <h6>Tu adoreras travailler chez nous pour :</h6>
                        <ul>
                            <li>La possibilité de travailler sur des projets de clients différents, présentant des réalités et des défis communicationnels différents.</li>
                            <li>La participation aux processus créatifs. Les brainstorms se font avec tous les membres de l’équipe qui désirent participer!</li>
                            <li>La satisfaction de participer au renforcement de ressources communautaires et socialement engagées.</li>
                            <li>L’ambiance chaleureuse, presque familiale.</li>
                            <li>L’environnement décontracté.</li>
                            <li>L’espace de travail ouvert et le local très lumineux, situé sur St-Joseph Est à proximité des transports en commun, de restaurants et de boutiques.</li>
                            <li>La chance de faire partie d’une équipe passionnée, jeune de cœur, axée sur l’humain et bouillonnante de créativité.</li>
                        </ul>
                        <div className='cta'>
                            <p>Alors t'embarques?</p>
                            <button onClick={this.postform}>Postuler <Arrow orientation='right' /></button>
                        </div>
                    </div>
                </div>

                <div className='postForm' ref='postForm'>
                    <div className='postWrapper' ref='postContent'>
                        <span className='formTitle'>Application spontanée</span>
                        {formError}
                        <form id='postForm'>
                            <div className='row'>
                                <div className='input-field'>
                                    <input type='text' ref='name' id='name' />
                                    <label htmlFor="name">Nom*</label>
                                </div>
                                <div className='input-field'>
                                    <input type='email' ref='email' id='email' />
                                    <label htmlFor="email">Courriel*</label>
                                </div>
                                <div className='input-field'>
                                    <textarea className='materialize-textarea' ref='message' id='msg'></textarea>
                                    <label htmlFor="msg">Message* <span className='precision'>(Profitez-en pour glisser l’adresse de votre portfolio par exemple.)</span></label>
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
                                <button className='semiShadow' onClick={this.postuler}>Envoyer <Arrow orientation="right" /></button>
                                {loading}
                                {formSuccess}
                            </div>
                        </form>
                    </div>
                </div>

                <JobNavigation ref='jobNav' changeOffer={this.changeOffer} current='spontaneous' />

                <Footer goUp={this.goUp} close={this.close} />
            </div>
        )
    }
}