import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Footer from '../../core/containers/Footer.jsx';
import Arrow from '../../core/components/Arrow.jsx';

const T = i18n.createComponent();

export default class Contact extends React.Component{
    constructor(){
        super();
        this.submit = this.submit.bind(this);
        this.state = {
            hasError:false,
            emailSent:false
        }
    }

    componentDidMount(){
        createScroll();
        if(Meteor.isClient){
            Session.set("fromContact", false);
        }
    }

    componentWillUnmount(){
        removeScroll();
    }

    submit(event){
        event.preventDefault();
        const name = this.refs.name.value,
              email = this.refs.email.value,
              msg = this.refs.message.value;

        if(name != "" && email != "" && msg != ""){
            this.setState({
                hasError:false,
                emailSent:true
            });
            Meteor.call("sendEmail", email, name, msg);
            this.refs.name.value = "";
            this.refs.email.value = "";
            this.refs.message.value = "";
        }else{
            this.setState({
                hasError:true,
                emailSent:false
            });
        }
    }

    goToJobs(page){
        if(Meteor.isClient){
            Session.set("fromContact", true);
        }
        if(page == "motion"){
            FlowRouter.go("/jobs/motion-designer");
        }else if(page == "frontend"){
            FlowRouter.go("/jobs/frontendDev");
        }else if(page == "marketing"){
            FlowRouter.go("/jobs/directeur-marketing");
        }else if(page == "spontaneous"){
            FlowRouter.go("/jobs/spontaneous")
        }
    }

    render() {
        /* META DATA */
        DocHead.setTitle('Talk - Contact');
        /* /META DATA */
        const errorField = this.state.hasError ? <p className='error'><T>common.error.error</T></p> : <div></div>;
        const successField = this.state.emailSent ? <p className='success'><T>common.error.contactSuccess</T></p> : <span className='note'><T>common.contact.mail.note</T></span>;
        const btnClass = this.state.emailSent ? "semiShadow sent" : "semiShadow";
        return(
            <div className='wrapper' ref='wrapper'>
                <ReactCSSTransitionGroup
                        component='div'
                        className='contactContainer'
                        transitionName='contentLoad'//class
                        transitionAppearTimeout={600}
                        transitionEnterTimeout={600}//time to enter
                        transitionLeaveTimeout={400}//Time to leave
                        transitionAppear={true}
                        >
                    <div className='title'>
                        <h2><T>common.contact.title</T></h2>
                    </div>
                    <div className='contactForm fadefx'>
                        <h5><T>common.contact.mail.title</T></h5>
                        <form >
                            <div className='row'>
                                {errorField}
                                <div className='input-field'>
                                    <input type='text' ref='name' id='name' />
                                    <label htmlFor="name"><T>common.contact.mail.f1</T></label>
                                </div>
                                <div className='input-field'>
                                    <input type='email' ref='email' id='email' />
                                    <label htmlFor="email"><T>common.contact.mail.f2</T></label>
                                </div>
                                <div className='input-field'>
                                    <textarea className='materialize-textarea' ref='message' id='msg'></textarea>
                                    <label htmlFor="msg"><T>common.contact.mail.f3</T></label>
                                </div>
                                <button type='submit' className={btnClass} onClick={this.submit}><T>common.contact.mail.button</T> <Arrow orientation="right" /></button>
                                {successField}
                            </div>
                        </form>
                    </div>
                    <div className='emplois fadefx'>
                        <div className='row'>
                            <div className='offreDemplois col l4 s12'>
                                <div className='offreWrapper'>
                                    <h2 className='title'><T>common.contact.phone.title1</T><br /> <T>common.contact.phone.title2</T></h2>
                                    <p><T>common.contact.phone.phone1Title</T></p>
                                    <p><T>common.contact.phone.phone1</T></p>
                                    <p>-</p>
                                    <p><T>common.contact.phone.phone2Title</T></p>
                                    <p><T>common.contact.phone.phone2</T></p>
                                    <p>-</p>
                                    <p><a href='mailto:info@talk.marketing'>info@talk.marketing</a></p>
                                </div>
                            </div>
                            <div className='offreDemplois col l4 s12'>
                                <div className='offreWrapper'>
                                    <h2 className='title'><T>common.contact.adress.title1</T><br /> <T>common.contact.adress.title2</T></h2>
                                    <p><T>common.contact.adress.l1</T></p>
                                    <p><T>common.contact.adress.l2</T></p>
                                    <p><T>common.contact.adress.l3</T></p>
                                    <p><T>common.contact.adress.l4</T></p>
                                    <p>-</p>
                                    <a href='https://www.google.ca/maps/place/830+Rue+Saint-Joseph+Est+%23204,+Ville+de+Qu%C3%A9bec,+QC+G1K+3C9/@46.8151615,-71.2201303,16.25z/data=!4m5!3m4!1s0x4cb896749237fdb7:0x19aea72b51607cd4!8m2!3d46.8162301!4d-71.2185657' target='_blank'><button className='btnShadow'><T>common.contact.adress.button</T> <Arrow orientation="right" /></button></a>
                                </div>
                            </div>
                            <div className='offreDemplois col l4 s12'>
                                <div className='offreWrapper'>
                                    <h2 className='title'><T>common.contact.career.title1</T><br /> <T>common.contact.career.title2</T></h2>
                                    <button className='btnShadow poste hoverClick' onClick={()=>{this.goToJobs("motion")}}><T>common.contact.career.j1</T> <Arrow orientation="right" /></button>
                                    <button className='btnShadow poste hoverClick' onClick={()=>{this.goToJobs("frontend")}}><T>common.contact.career.j2</T> <Arrow orientation="right" /></button>
                                    <button className='btnShadow poste hoverClick' onClick={()=>{this.goToJobs("marketing")}}><T>common.directeurMarketing.title</T> <Arrow orientation="right" /></button>
                                    <p className='text'><T>common.contact.career.text</T></p>
                                    <button className='semiShadow hoverClick' onClick={()=>{this.goToJobs("spontaneous")}}><T>common.contact.career.button</T> <Arrow orientation="right" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>

                <Footer />
            </div>
        )
    }
}