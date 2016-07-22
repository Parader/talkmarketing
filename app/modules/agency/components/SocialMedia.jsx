import React from 'react';
import ReactDOM from 'react-dom';

const T = i18n.createComponent();

export default class SocialMedia extends React.Component{

    render() {
        return(
            <div className='followUsContainer'>
                <h4><T>common.team.photos.socialnetworkTag</T></h4>
                <p><T>common.team.photos.socialnetwork</T></p>
                <div className='socialContainer'>
                    <a href='https://facebook.com/talkmkt/' target='_blank'><div className='social facebook'></div></a>
                    <a href='https://www.instagram.com/talkmarketing/' target='_blank'><div className='social instagram'></div></a>
                </div>
            </div>
        )
    }
}