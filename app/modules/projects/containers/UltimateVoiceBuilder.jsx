import React from 'react';
import ReactDOM from 'react-dom';

import MiniPlay from '../../expertise/components/MiniPlay.jsx';
import Footer from '../components/Footer.jsx';
import Arrow from '../../core/components/Arrow.jsx';

const T = i18n.createComponent();

export default class UltimateVoiceBuilder extends React.Component{
    constructor(props) {
        super(props);
        this.goUp = this.goUp.bind(this);
        if(Meteor.isClient){
            Session.set("inProjects", true);
        }
    }

    componentDidMount() {
        createScroll();
        if(Meteor.isClient){
            const swiper = new Swiper(".sliderContainer", {
                direction: 'horizontal',
                loop:true,
                pagination: '.swiper-pagination',
                paginationClickable:true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                keyboardControl:true,
                threshold:20,
                speed:500,
                paginationBulletRender: function (index, className) {
                    if(index == 0){
                        return '<span class="' + className + ' pagi">'+i18n.getTranslation("common.uvbProjects.work.webPage.p1")+'</span>';
                    }else if(index == 1){
                        return '<span class="' + className + ' pagi">'+i18n.getTranslation("common.uvbProjects.work.webPage.p2")+'</span>';
                    }else if(index == 2){
                        return '<span class="' + className + ' pagi">'+i18n.getTranslation("common.uvbProjects.work.webPage.p3")+'</span>';
                    }else if(index == 3){
                        return '<span class="' + className + ' pagi">'+i18n.getTranslation("common.uvbProjects.work.webPage.p4")+'</span>';
                    }else{
                        return '<span class="' + className + ' pagi">'+i18n.getTranslation("common.uvbProjects.work.webPage.p5")+'</span>';
                    }
                }
            });
            $('.videoContainer').lightGallery({
                mode:"lg-soft-zoom",
                download: false,
                selector: '.item',
                pager:false,
                zoom:false,
                hash:false,
                fullScreen:false,
                counter:false
            });
            const transitionTl = new TimelineMax();
            let line = this.refs.line1;
            if($(window).width()<768){
                line = this.refs.line2;
            }
            transitionTl
                .add("apparition")
                .set(line, {drawSVG:"0% 0%", autoAlpha:1}, "apparition")
                .to(line, 1, {drawSVG:"0% 100%", ease:Power2.easeInOut}, "apparition+=0.3")
                .to(this.refs.close, 0.3, {autoAlpha:1}, "apparition")
                .to(this.refs.word, 0.3 , {autoAlpha:1}, "apparition")
            ;
        }
    }

    componentWillUnmount() {
        removeScroll();
    }

    close(){
        FlowRouter.go("/expertise");
    }

    goUp(){
        TweenLite.to($(".mainContainer"), 0.3, {scrollTo:0})
    }

    render() {
        /* META DATA */
        DocHead.setTitle('Talk - Ultimate voice builder');
        /* /META DATA */
        return(
            <div className='singleProjectContainer uvb'>
                <div className='heading'>
                    <div className='filter'></div>
                    <div className='close' onClick={this.close} ref='close'><T>common.uvbProjects.buttonClose</T> <img src="/images/closeX.svg" /></div>
                    <div className='content'>
                        <h1 ref='word'><T>common.uvbProjects.tag</T></h1>
                        <p className='hook'><T>common.uvbProjects.title</T></p>
                    </div>
                    <div className='lineContainer'>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             width="5.2px" height="196px" viewBox="0 0 5.2 196" enableBackground="new 0 0 5.2 196" xmlSpace="preserve" className='desktop'>
                            <line ref='line1' fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="10" x1="2.5" y1="0" x2="2.5" y2="196"/>
                        </svg>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             width="5.2px" height="106.5px" viewBox="0 0 5.2 106.5" enableBackground="new 0 0 5.2 106.5" xmlSpace="preserve" className='mobile'>
                            <line ref='line2' fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="10" x1="2.5" y1="0" x2="2.5" y2="106.5"/>
                        </svg>
                    </div>
                </div>
                <div className='whiteTextBlock'>
                    <p className='fadefx'><T>common.uvbProjects.intro</T></p>
                </div>
                <div className='purpleTextBlock'>
                    <div className='row fadefx'>
                        <div className='col l3 s12 firstCol'>
                            <h3><T>common.uvbProjects.bloc1.title</T></h3>
                            <p><T>common.uvbProjects.bloc1.p</T></p>
                        </div>
                        <div className='col l3 offset-l1 s12'>
                            <h3><T>common.uvbProjects.bloc2.title</T></h3>
                            <p><T>common.uvbProjects.bloc2.p</T></p>
                        </div>
                        <div className='col l3 offset-l1 s12'>
                            <h3><T>common.uvbProjects.bloc3.title</T></h3>
                            <p><T>common.uvbProjects.bloc3.p</T></p>
                        </div>
                    </div>
                </div>
                <div className='workBlock'>
                    <h3 className='fadefx'><T>common.uvbProjects.work.title</T></h3>
                    <div className='icones fadefx'><img src='/images/icones_uvb.svg' /></div>
                    <div className='slider-wrapper fadefx'>
                        <div className='sliderNavigation'>
                            <div className="swiper-pagination"></div>
                        </div>
                        <div className='browser'></div>
                        <div className='sliderContainer'>
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <video autoPlay loop controls id='bgVid'>
                                        <source src="http://d27t9uefwdhmj1.cloudfront.net/talk_web_uvbhomescreen.m4v" type="video/m4v" />
                                        <source src="http://d27t9uefwdhmj1.cloudfront.net/talk_web_uvbhomescreen.mp4" type="video/mp4" />
                                        <source src="http://d27t9uefwdhmj1.cloudfront.net/talk_web_uvbhomescreen.ogv" type="video/ogv" />
                                        <source src="http://d27t9uefwdhmj1.cloudfront.net/talk_web_uvbhomescreen.webm" type="video/webm" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>

                                <div className="swiper-slide">
                                    <img src='/images/uvb/presentation.jpg' />
                                </div>

                                <div className="swiper-slide">
                                    <img src='/images/uvb/about.jpg' />
                                </div>

                                <div className="swiper-slide">
                                    <img src='/images/uvb/testimonials.jpg' />
                                </div>

                                <div className="swiper-slide">
                                    <img src='/images/uvb/stream.jpg' />
                                </div>


                            </div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                </div>

                <div className='logoShow'>
                    <div className='uvbLogo fadefx'>
                        <img src='/images/uvb/logo.png' />
                    </div>
                </div>

                <div className='videoBlock'>
                    <div className='videoContainer fadefx'>
                        <a className="item" href='https://www.youtube.com/watch?v=gj_k-iPOua8' >
                            <img src='/images/uvb/gary.jpg' />
                            <div className='overlay'></div>
                            <div className='play'><T>common.expertise.projects.video</T> <MiniPlay /></div>
                        </a>
                    </div>
                </div>

                <div className='statsBlock'>
                    <div className='filter'></div>
                    <div className='part1'>
                        <div className='container'>
                            <h5 className='miniTitle fadefx'><T>common.uvbProjects.testimonial.tag</T></h5>
                            <p className='fadefx'><T>common.uvbProjects.testimonial.quote</T></p>
                        </div>
                    </div>
                    <div className='part2'>
                        <div className='row fadefx'>
                            <div className='item col'>
                                <span className='stat'><T>common.uvbProjects.stats.s1title</T><img src="/images/green_plus.svg" className='greenPlus' /></span>
                                <p><T>common.uvbProjects.stats.s1text</T></p>
                            </div>
                            <div className='item col'>
                                <span className='stat smaller'><Arrow orientation='up' /><T>common.uvbProjects.stats.s2title</T></span>
                                <p><T>common.uvbProjects.stats.s2text</T></p>
                            </div>
                            <div className='item col'>
                                <span className='stat'><T>common.uvbProjects.stats.s3title</T></span>
                                <p><T>common.uvbProjects.stats.s3text</T></p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer goUp={this.goUp} close={this.close} />

            </div>
        )
    }
}