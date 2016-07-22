import React from 'react';
import ReactDOM from 'react-dom';

import Arrow from '../../core/components/Arrow.jsx';

const T = i18n.createComponent();

export default class Footer extends React.Component{

    render() {

        return(
            <footer className='footerContainer fadefx'>
                <div className='left'>
                    <div className='socialContainer'>
                        <a href='https://facebook.com/talkmkt/' target='_blank'><div className='social facebook'></div></a>
                        <a href='https://www.instagram.com/talkmarketing/' target='_blank'><div className='social instagram'></div></a>
                    </div>
                    <div className='copyright'>
                        <p><T>common.footer.copyright</T></p>
                    </div>
                </div>
                <div className='right'>
                    <div className='cta'>
                        <a href='/contact'><button className='semiShadow'><T>common.footer.cta</T> <Arrow orientation='right' /></button></a>
                    </div>
                    <div className='termsContainer'>
                        <a href='/privacy' className='link privacy'><T>common.footer.privacy</T></a>
                    </div>
                </div>
            </footer>
        )
    }
}