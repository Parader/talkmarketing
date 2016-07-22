import React from 'react';
import ReactDOM from 'react-dom';

const T = i18n.createComponent();

export default class DashboardSlider extends React.Component {
    componentDidMount(){
        var mySwiper = new Swiper ('.sliderContainer', {
            direction: 'horizontal',
            loop: false,
            // If we need pagination
            pagination: '.swiper-pagination',
            paginationClickable:true,
            // Navigation arrows
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            keyboardControl:true
        });
    }

    render() {
        return(
            <div className='dashboardContainer'>
                <div className='sliderNavigation fadefx'>
                    <h2><T>common.expertise.clientzone.title</T></h2>
                </div>
                <div className='sliderContainer fadefx'>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <p><T>common.expertise.clientzone.slide1</T></p>
                            <div className='browserView'>
                                <img src={i18n.getTranslation("common.expertise.clientzone.p1")} alt='Progression des projets' className='desktop' />
                                <img src={i18n.getTranslation("common.expertise.clientzone.p1m")} alt='Progression des projets' className='mobile' />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <p><T>common.expertise.clientzone.slide2</T></p>
                            <div className='browserView'>
                                <img src={i18n.getTranslation("common.expertise.clientzone.p2")} alt='Progression des projets' className='desktop' />
                                <img src={i18n.getTranslation("common.expertise.clientzone.p2m")} alt='Progression des projets' className='mobile' />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <p><T>common.expertise.clientzone.slide3</T></p>
                            <div className='browserView'>
                                <img src={i18n.getTranslation("common.expertise.clientzone.p3")} alt='Progression des projets' className='desktop' />
                                <img src={i18n.getTranslation("common.expertise.clientzone.p3m")} alt='Progression des projets' className='mobile' />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <p className='longest'><T>common.expertise.clientzone.slide4</T></p>
                            <div className='browserView'>
                                <img src={i18n.getTranslation("common.expertise.clientzone.p4")} alt='Progression des projets' className='desktop' />
                                <img src={i18n.getTranslation("common.expertise.clientzone.p4m")} alt='Progression des projets' className='mobile' />
                            </div>
                        </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        )
    }
}