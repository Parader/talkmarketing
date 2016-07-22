import React from 'react';
import ReactDOM from 'react-dom';

export default class Timeline extends React.Component {

    constructor(){
        super();
        this.state = {
            timelineClass:"animTimeline"
        }
        this.updateProgress = this.updateProgress.bind(this);
    }

    updateProgress(frame){
        switch(frame){
            case 0:this.setState({timelineClass:"animTimeline"});
                    break;
            case 1:this.setState({timelineClass:"animTimeline s1"});
                    break;
            case 2:this.setState({timelineClass:"animTimeline s2"});
                    break;
            case 3:this.setState({timelineClass:"animTimeline s3"});
                    break;
            case 4:this.setState({timelineClass:"animTimeline s4"});
                    break;
            case 5:this.setState({timelineClass:"animTimeline s5"});
                    break;
            case 6:this.setState({timelineClass:"animTimeline s6"});
                    break;
            case 7:this.setState({timelineClass:"animTimeline s7"});
                    break;
            case 8:this.setState({timelineClass:"animTimeline s8"});
                    break;
            case 9:this.setState({timelineClass:"animTimeline s9"});
                    break;
            case 10:this.setState({timelineClass:"animTimeline s10"});
                    break;
            case 11:this.setState({timelineClass:"animTimeline s11"});
                    break;
            case 12:this.setState({timelineClass:"animTimeline s12"});
                    break;
            case 13:this.setState({timelineClass:"animTimeline s13"});
                    break;
            case 14:this.setState({timelineClass:"animTimeline s14"});
                    break;
            case 15:this.setState({timelineClass:"animTimeline s15"});
                    break;
            case 16:this.setState({timelineClass:"animTimeline s16"});
                    break;
            case 17:this.setState({timelineClass:"animTimeline s17"});
                    Session.set("animationStatus", "paused");
                    break;
        }
    }

    goToSeek(time){
        mainTl.play(time);
        Session.set("animationStatus", "playing");
        Session.set("animationStop", false);
    }

    render() {
        return(
            <div>
                <svg className={this.state.timelineClass+" desktop"} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     width="23.2px" height="607px" viewBox="0 0 23.2 607" enableBackground="new 0 0 23.2 607" xmlSpace="preserve">
                    <circle onClick={this.goToSeek.bind(this, 0)} className='r5' fill="#f36c23" cx="11.4" cy="55.5" r="8"/>
                    <circle onClick={this.goToSeek.bind(this, 11.7)} className='r1' fill="#BCB0C6" cx="11.4" cy="184.2" r="8"/>
                    <circle onClick={this.goToSeek.bind(this, 37.1)} className='r2' fill="#BCB0C6" cx="11.4" cy="377.3" r="8"/>
                    <circle onClick={this.goToSeek.bind(this, 54.6)} className='r3' fill="#BCB0C6" cx="11.4" cy="506" r="8"/>
                    <g className='r4'>
                        <path fill="#BCB0C6" d="M0,600h4.1v0.9H1v2.2h2.5v0.9H1v2.3h3.3v0.9H0V600z"/>
                        <path fill="#BCB0C6" d="M7.7,600h1l3.1,4.6c0.3,0.4,0.6,1,0.6,1h0c0,0-0.1-0.6-0.1-1V600h1v7.1h-1l-3.1-4.6c-0.3-0.4-0.6-1-0.6-1h0
                            c0,0,0.1,0.6,0.1,1v4.6h-1V600z"/>
                        <path fill="#BCB0C6" d="M17.3,600h2.3c2.2,0,3.6,1.3,3.6,3.5c0,2.2-1.4,3.5-3.6,3.5h-2.3V600z M19.6,606.2c1.6,0,2.6-0.9,2.6-2.7
                            c0-1.7-1-2.7-2.6-2.7h-1.3v5.3H19.6z"/>
                        <rect className='r4' onClick={this.goToSeek.bind(this, -0.1)} x="0" y="599.9" opacity="0" width="23.2" height="7.1"/>
                    </g>
                    <g display="none" className='r4'>
                        <path display="inline" fill="#BCB0C6" d="M2.5,600h3.9v0.9H3.5v2.3H6v0.9H3.5v3h-1V600z"/>
                        <path display="inline" fill="#BCB0C6" d="M9.7,600h1v7.1h-1V600z"/>
                        <path display="inline" fill="#BCB0C6" d="M14.6,600h1l3.1,4.6c0.3,0.4,0.6,1,0.6,1h0c0,0-0.1-0.6-0.1-1V600h1v7.1h-1l-3.1-4.6
                            c-0.3-0.4-0.6-1-0.6-1h0c0,0,0.1,0.6,0.1,1v4.6h-1V600z"/>
                        <rect className='r4' onClick={this.goToSeek.bind(this, -0.1)} x="0" y="599.9" opacity="0" width="23.2" height="10"/>
                    </g>

                    <circle className='c1' fill="#BCB0C6" cx="11.4" cy="87.7" r="4"/>
                    <circle className='c2' fill="#BCB0C6" cx="11.4" cy="119.8" r="4"/>
                    <circle className='c3' fill="#BCB0C6" cx="11.4" cy="152" r="4"/>
                    <circle className='c4' fill="#BCB0C6" cx="11.4" cy="216.4" r="4"/>
                    <circle className='c5' fill="#BCB0C6" cx="11.4" cy="248.6" r="4"/>
                    <circle className='c6' fill="#BCB0C6" cx="11.4" cy="280.7" r="4"/>
                    <circle className='c7' fill="#BCB0C6" cx="11.4" cy="312.9" r="4"/>
                    <circle className='c8' fill="#BCB0C6" cx="11.4" cy="345.1" r="4"/>
                    <circle className='c9' fill="#BCB0C6" cx="11.4" cy="409.5" r="4"/>
                    <circle className='c10' fill="#BCB0C6" cx="11.4" cy="441.6" r="4"/>
                    <circle className='c11' fill="#BCB0C6" cx="11.4" cy="473.8" r="4"/>
                    <circle className='c12' fill="#BCB0C6" cx="11.4" cy="538.2" r="4"/>
                    <circle className='c13' fill="#BCB0C6" cx="11.4" cy="570.4" r="4"/>

                    <g className='exit'>
                        <path fill="#200E38" d="M5.4,10.3v4.1h3.5V9.3C6.9,10.1,5.4,10.3,5.4,10.3z M13.3,7L13.3,7l-0.2-0.3c-0.9,0.8-1.9,1.4-2.8,1.9h0
                        l3.1,5.9h4L13.3,7z"/>
                        <path fill="#F16924" d="M17.2,0c-0.7,2.6-1.9,4.5-3.4,6c-0.2,0.2-0.4,0.4-0.7,0.6c-0.9,0.8-1.9,1.4-2.8,1.9c-0.5,0.3-1,0.5-1.4,0.7
                            c-2,0.9-3.5,1.1-3.5,1.1V0h3.5v5.6c0,0,1.1-0.2,2.2-1.4c0.8-0.8,1.7-2.1,2.3-4.2H17.2z"/>
                        <rect onClick={this.props.leave} y="0.2" fillOpacity="0" width="23.2" height="16.4"/>
                    </g>
                </svg>

                <svg className={this.state.timelineClass+" mobile"} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     width="20.9px" height="179.8px" viewBox="0 0 20.9 179.8" enableBackground="new 0 0 20.9 179.8" xmlSpace="preserve">
                    <g className='r4'>
                        <path fill="#FFFFFF" d="M0,173.4h3.7v0.8H0.9v2h2.3v0.8H0.9v2h3v0.8H0V173.4z"/>
                        <path fill="#FFFFFF" d="M7,173.4h0.9l2.8,4.1c0.2,0.3,0.5,0.9,0.5,0.9h0c0,0-0.1-0.6-0.1-0.9v-4.1H12v6.4h-0.9l-2.8-4.1
                            c-0.2-0.4-0.5-0.9-0.5-0.9h0c0,0,0.1,0.6,0.1,0.9v4.1H7V173.4z"/>
                        <path fill="#FFFFFF" d="M15.6,173.4h2.1c1.9,0,3.2,1.2,3.2,3.2c0,2-1.3,3.2-3.2,3.2h-2.1V173.4z M17.6,179c1.4,0,2.4-0.8,2.4-2.4
                            c0-1.6-0.9-2.4-2.4-2.4h-1.2v4.8H17.6z"/>
                        <rect className='r4' onClick={this.goToSeek.bind(this, -0.1)} y="172.7" opacity="0" width="20.9" height="10"/>
                    </g>

                    <circle onClick={this.goToSeek.bind(this, 0)} className='r5' fill="#F26424" cx="10.9" cy="5" r="5"/>
                    <circle onClick={this.goToSeek.bind(this, 11.7)} className='r1' fill="#FFFFFF" cx="10.9" cy="48.4" r="5"/>
                    <circle onClick={this.goToSeek.bind(this, 37.1)} className='r2' fill="#FFFFFF" cx="10.9" cy="90.8" r="8"/>
                    <circle onClick={this.goToSeek.bind(this, 54.6)} className='r3' fill="#FFFFFF" cx="10.9" cy="135.2" r="5"/>
                    <g display='none' className='r4'>
                        <path fill="#FFFFFF" d="M2.4,173.4h3.5v0.8H3.3v2.1h2.2v0.8H3.3v2.7H2.4V173.4z"/>
                        <path fill="#FFFFFF" d="M8.9,173.4h0.9v6.4H8.9V173.4z"/>
                        <path fill="#FFFFFF" d="M13.4,173.4h0.9l2.8,4.1c0.2,0.3,0.5,0.9,0.5,0.9h0c0,0-0.1-0.6-0.1-0.9v-4.1h0.9v6.4h-0.9l-2.8-4.1
                            c-0.2-0.4-0.5-0.9-0.5-0.9h0c0,0,0.1,0.6,0.1,0.9v4.1h-0.9V173.4z"/>
                        <rect className='r4' onClick={this.goToSeek.bind(this, -0.1)} y="172.7" opacity="0" width="20.9" height="7.1"/>
                    </g>
                </svg>
            </div>
        )
    }
}