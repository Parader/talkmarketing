import React from 'react';
import ReactDOM from 'react-dom';

import Arrow from '../../core/components/Arrow.jsx';

const T = i18n.createComponent();

export default class Footer extends React.Component{
    constructor(){
        super();
        this.goToForm = this.goToForm.bind(this);
    }

    goToForm(e){
        e.preventDefault();
        if(FlowRouter.current().route.name == "contact")
            TweenLite.to($(".mainContainer.scroll-content"), 0.3, {scrollTo:0 });
        FlowRouter.go("contact");
    }

    render() {

        return(
            <footer className='footerContainer fadefx'>
                <div className='center'>
                    <div className='cta'>
                        <p className='ctaText'><T>common.footer.ctaText</T></p>
                        <a href='/contact' onClick={this.goToForm} ref='cta'><button className='semiShadow'><T>common.footer.cta</T> <Arrow orientation='right' /></button></a>
                    </div>
                </div>
                <div className='left'>
                    <div className='socialContainer'>
                        <a href='https://facebook.com/talkmarketingagency/' target='_blank'><div className='social facebook'></div></a>
                        <a href='https://www.instagram.com/talkmarketing/' target='_blank'><div className='social instagram'></div></a>
                        <a href='https://www.linkedin.com/company/talk-marketing-agency' target='_blank'><div className='social linkedIn'></div></a>
                    </div>
                    <div className='copyright'>
                        <p><T>common.footer.copyright</T></p>
                    </div>
                </div>
                <div className='right'>

                    <div className='termsContainer'>
                        <a href='/privacy' className='link privacy'><T>common.footer.privacy</T></a>
                    </div>
                </div>
            </footer>
        )
    }
}