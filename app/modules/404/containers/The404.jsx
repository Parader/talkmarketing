import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Arrow from '../../core/components/Arrow.jsx';

const T = i18n.createComponent();

export default class The404 extends React.Component{
    constructor(){
        super();
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        this.rainbow = this.rainbow.bind(this);
        this.state = {
            sourire:false,
            rainbow:false
        };
    }

    componentDidMount(){
        this.rightEyePosX = $(".rightEye").offset().left+3.7;
        this.rightEyePosY = $(".rightEye").offset().top+3.7-25;
        this.leftEyePosX = $(".leftEye").offset().left+3.7;
        this.leftEyePosY = $(".leftEye").offset().top+3.7-25;
        this.mouthPosX = $(".mouth").offset().left+5;
        this.mouthPosY = $(".mouth").offset().top+5;
        this.mouthPos = [this.mouthPosX, this.mouthPosY];
        this.windowWidth = $(window).width();
        this.windowHeight = $(window).height();

        $(".mainContainer").css("overflow", "hidden");
        window.addEventListener("mousemove", this.mouseMoveHandler);
    }

    mouseMoveHandler(e){
        let sourire = false;
        if($(e.target).hasClass("header") || $(e.target).parents(".header").length || $(e.target).parents(".btnShadow").length){
            sourire = true;
        }
        let resultRight = this.limit(e.x, e.y, "right");
        let resultLeft = this.limit(e.x, e.y, "left");
        resultRight.x = resultRight.x - this.rightEyePosX;
        resultRight.y = resultRight.y - this.rightEyePosY;
        resultLeft.x = resultLeft.x - this.leftEyePosX;
        resultLeft.y = resultLeft.y - this.leftEyePosY;
        if(!this.state.rainbow){
            TweenLite.to($(".rightEye"), 0.01, {x:resultRight.x, y:resultRight.y});
            TweenLite.to($(".leftEye"), 0.01, {x:resultLeft.x, y:resultLeft.y});
        }else{
            TweenLite.to([$(".rightEye"), $(".leftEye")], 0.01, {x:0, y:0});
        }
        var mousePosX = e.clientX,
            mousePosY = e.clientY,
            mousePos = [mousePosX, mousePosY],
            mouthDistanceX = mousePosX - this.mouthPosX,
            mouthDistanceY = mousePosY - this.mouthPosY,
            distance = Math.sqrt((mouthDistanceX*mouthDistanceX) + (mouthDistanceY*mouthDistanceY)),
            dx = (this.windowWidth-this.mouthPosX),
            dy = (this.windowHeight-this.mouthPosY),
            distanceTopLeft = Math.sqrt((this.mouthPosX*this.mouthPosX) + (this.mouthPosY*this.mouthPosY)),
            distanceTopRight = Math.sqrt((dx*dx) + (this.mouthPosY*this.mouthPosY)),
            distanceBotLeft = Math.sqrt((dy*dy) + (this.mouthPosY*this.mouthPosY)),
            distanceBotRight = Math.sqrt((dx*dx) + (dy*dy)),
            percent = 0
            ;



        if(!sourire){
            this.setState({
                sourire:false
            });
            if(mouthDistanceY<0 && mouthDistanceX<0){//top left
                percent = 100 - (( distance * 100 )/distanceTopLeft);
            }else if(mouthDistanceY<0 && mouthDistanceX>0){//top right
                percent = 100 - (( distance * 100 )/distanceTopRight);
            }else if(mouthDistanceY>0 && mouthDistanceX>0){//bot right
                percent = 100 - (( distance * 100 )/distanceBotRight);
            }else if(mouthDistanceY>0 && mouthDistanceX<0){//bot left
                percent = 100 - (( distance * 100 )/distanceBotLeft);
            }
            TweenLite.to([$(".rightEyebrow"), $(".leftEyebrow")], 0.01, {y:-18*(percent/100)});//percent of 20 px
            if(this.state.rainbow){
                TweenLite.to($(".mouth"), 0.01, {transformOrigin:"50% 50%", scale:5});//percent of 5 scale
            }else{
                TweenLite.to($(".mouth"), 0.01, {transformOrigin:"50% 50%", scale:5*(percent/100)});//percent of 5 scale
            }
        }else{
            this.setState({
                sourire:true,
                rainbow:false
            });
        }
    }

    distance(dot1, dot2) {
            var x1 = dot1[0],
                y1 = dot1[1],
                x2 = dot2[0],
                y2 = dot2[1];
            return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        }

    limit(x, y, side) {
            let posX, posY;
            if(side == "right"){
                posX = this.rightEyePosX;
                posY = this.rightEyePosY;
            }else{
                posX = this.leftEyePosX;
                posY = this.leftEyePosY;
            }
            let dist = this.distance([x, y], [posX, posY]);
            if (dist <= 14) {
                return {x: x, y: y};
            }
            else {
                x = x - posX;
                y = y - posY;
                var radians = Math.atan2(y, x)
                return {
                    x: Math.cos(radians) * 14 + posX,
                    y: Math.sin(radians) * 14 + posY
                }
            }
        }

    rainbow(){
        this.setState({
            rainbow:true
        });
    }

    render() {
        let mouth = this.state.sourire ? <path fill="none" stroke="#010101" stroke-miterlimit="10" d="M63.806,87.578c13.877,13.877,36.335,13.877,50.212,0"/> : <circle onClick={this.rainbow} className='mouth' cx="88.4" cy="97.7" r="4.3"/>;
        if(this.state.rainbow){
            mouth = this.state.sourire ? <path fill="none" stroke="#010101" stroke-miterlimit="10" d="M63.806,87.578c13.877,13.877,36.335,13.877,50.212,0"/> : <g className='rain'><circle onClick={this.rainbow} className='mouth' cx="88.4" cy="97.7" r="4.3"/><rect x="78.401" y="99.889" fill="#F26538" width="4.5" height="1"/><rect x="82.901" y="99.889" fill="#FAED24" width="4.5" height="1"/><rect x="73.901" y="99.889" fill="#DC1F26" width="4.5" height="1"/><rect x="91.901" y="99.889" fill="#4A93CF" width="4.5" height="1"/><rect x="87.401" y="99.889" fill="#2AB34B" width="4.5" height="1"/><rect x="96.401" y="99.889" fill="#292B77" width="4.5" height="1"/><rect x="100.901" y="99.889" fill="#3B2F90" width="4.5" height="1"/></g>;
            TweenLite.to($(".rain rect"), 10, {scaleY:500, ease:Power0.easeNone});

        }

        return(
            <div className='wrapper' ref='wrapper'>
                <ReactCSSTransitionGroup
                        component='div'
                        className='the404Container'
                        transitionName='contentLoad'//class
                        transitionAppearTimeout={600}
                        transitionEnterTimeout={600}//time to enter
                        transitionLeaveTimeout={400}//Time to leave
                        transitionAppear={true}
                        >
                    <div className='content'>
                        <div className='persoContainer'>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="177.5px" height="446.8px" viewBox="0 0 177.5 446.8" enableBackground="new 0 0 177.5 446.8" xmlSpace="preserve">
                                <ellipse fill="#EDE5D3" cx="92.8" cy="438.2" rx="77" ry="8.6"/>
                                <path fill="#686868" d="M176.7,173.9l-2,7.4l-48.4,178.1l-37.6-91.5l46.6-113.4h27.3C172.8,154.4,179.9,164.3,176.7,173.9z"/>
                                <polygon fill="#E08752" points="135.2,154.4 122.5,185.4 88.7,267.2 54.7,185.3 41.6,154.2 41.6,154.4 "/>
                                <polygon fill="#E5E5E5" points="42.1,154.2 42.1,154.2 42.1,154.2 "/>
                                <path fill="#F6CD99" d="M159.5,70.9c0,39.1-31.7,70.9-70.9,70.9c-1.1,0-2.1,0-3.2-0.1c-1.2,0-2.3,0-3.4-0.1
                                    c-1.1-0.1-2.2-0.3-3.4-0.3c0,0,0,0,0,0c-34.4-4.8-60.9-34.4-60.9-70.2c0-35.8,26.5-65.4,60.9-70.2c0,0,0,0,0,0
                                    c1.1,0,2.2-0.4,3.4-0.5c1.1-0.1,2.3-0.2,3.4-0.3c1,0,2.1-0.1,3.2-0.1C127.8,0,159.5,31.7,159.5,70.9z"/>
                                <polygon fill="#40292E" points="88.8,267.1 135.8,208.2 124.7,180.3 "/>
                                <polygon fill="#40292E" points="116,201.2 153.2,168.5 135.3,154.2 "/>
                                <path fill="#595959" d="M126.3,359.3l-0.4,1.6l-17.1,62.9c-3.6,10.8-13.7,15.5-23,14.2c-7.3-1-14.2-5.7-17-14.2L51,359.5l-6.6-23.9
                                    L0.8,173.9c-3.2-9.6,4-19.5,14.1-19.5h27.2l0-0.1l46.5,113.2l0.1,0.2L126.3,359.3z"/>
                                <polygon fill="#40292E" points="88.7,267.1 41.6,208.2 52.8,180.3 "/>
                                <polygon fill="#40292E" points="61.4,201.2 24.2,168.5 42.2,154.2 "/>
                                <line fill="none" x1="88.4" y1="267.2" x2="88.4" y2="267.2"/>
                                <path fill="#E5B989" d="M99.2,0.8c-0.3,0-0.5,0-0.8,0c0,0,0,0,0,0C64,5.6,37.5,35.3,37.5,71c0,35.6,26.2,65.1,60.4,70.1
                                    c-3,0.4-6.1,0.6-9.2,0.6c-1.1,0-2.1,0-3.2-0.1c-1.2,0-2.3,0-3.4-0.1c-1.1-0.1-2.3-0.3-3.4-0.3c0,0,0,0,0,0
                                    c-34.4-4.8-60.9-34.4-60.9-70.2S44.3,5.6,78.7,0.8c0,0,0,0,0,0c1.1,0,2.2-0.4,3.4-0.5c1.1-0.1,2.3-0.2,3.4-0.3c1,0,2.1-0.1,3.2-0.1
                                    C92.3,0,95.8,0.3,99.2,0.8z"/>
                                <circle fill="#FFFFFF" cx="65.1" cy="52.5" r="16.8"/>
                                <circle fill="#FFFFFF" cx="112.3" cy="52.5" r="16.8"/>
                                <circle className='leftEye' cx="65.1" cy="52.5" r="3.7"/>
                                <circle className='rightEye' cx="112.3" cy="52.5" r="3.7"/>
                                <path className='leftEyebrow' fill="none" stroke="#000000" strokeWidth="1.2" strokeMiterlimit="10" d="M76.5,28.3c-6.4-6.4-16.8-6.4-23.2,0"/>
                                <path className='rightEyebrow' fill="none" stroke="#000000" strokeWidth="1.2" strokeMiterlimit="10" d="M123.3,28.3c-6.4-6.4-16.8-6.4-23.2,0"/>
                                {mouth}
                            </svg>
                        </div>
                        <div className='text'>
                            <h1>404</h1>
                            <h2 className='miniTitle'><T>common.the404.miniTitle</T></h2>
                            <p><T>common.the404.phrase1</T><span className='guyText'><T>common.the404.phrase2</T></span></p>
                            <a href='/'><button className='btnShadow'><T>common.the404.button</T> <Arrow orientation="right" /></button></a>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>

            </div>
        )
    }
}