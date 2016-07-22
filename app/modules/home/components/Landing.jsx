import React from 'react';
import ReactDOM from 'react-dom';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Arrow from '../../core/components/Arrow.jsx';

const T = i18n.createComponent();

export default class Landing extends React.Component {
    constructor(){
        super();
        this.state = {
            isMobile:false,
            allowVideo:false
        }
    }

    componentDidMount(){
        $(".loadState").removeClass("loadState");
        if(window.outerHeight < 500 || window.outerWidth < 769){
            this.setState({isMobile:true});
        }
        $(window).bind("mousemove", ()=>{
            this.setState({
                allowVideo:true
            });
            $(window).unbind("mousemove");
        });
    }

    componentWillUnmount(){
        $(window).unbind("mousemove");
    }

    render() {
        let videoContainer = <div></div>;

        if(this.state.allowVideo){
            videoContainer = (this.state.isMobile) ? <div></div> : <video autoPlay loop id='bgVid' poster='/images/preload_video.jpg'>
                    <source src="http://d27t9uefwdhmj1.cloudfront.net/vidhome.mp4" type="video/mp4" />
                    <source src="http://d27t9uefwdhmj1.cloudfront.net/vidhome.ogv" type="video/ogv" />
                    <source src="http://d27t9uefwdhmj1.cloudfront.net/vidhome.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>;
        }



        return(
            <div className='landingContainer' ref='landingContainer'>
            <div className='filter'></div>
                <div className='bgVideo loadState' >
                    {videoContainer}
                </div>
                <ReactCSSTransitionGroup
                    transitionName='contentLoad'//class
                    transitionAppearTimeout={600}
                    transitionEnterTimeout={600}//time to enter
                    transitionLeaveTimeout={400}//Time to leave
                    transitionAppear={true}
                    >
                    <div className='content loadState' ref='content'>
                        <div className='movingPart' ref='movingPart'>
                            <h1><T>common.home.tagline</T></h1>
                            <p className='hook'><T>common.home.title</T></p>
                        </div>
                        <div className='scrollDown' onClick={this.props.leaveHome}>
                            <p><T>common.home.cta</T></p>
                            <span className='arrowWrap'>
                                <svg className='arrowContainer arrowDown' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     width="15px" height="50px" viewBox="0 0 15 22" enableBackground="new 0 0 15 22" xmlSpace="preserve">
                                    <polygon className='arrow' fill="#FFFFFF" points="15,14.5 7.5,22 0,14.5 0.9,13.6 7.5,20.2 14.1,13.6 "/>
                                    <rect className='rect' x="6.9" fill="#FFFFFF" width="1.3" height="20.9"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}