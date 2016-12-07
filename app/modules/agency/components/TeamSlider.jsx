import React from 'react';
import ReactDOM from 'react-dom';

const T = i18n.createComponent();

export default class TeamSlider extends React.Component {
    constructor(){
        super();
        this.releaseLastName = this.releaseLastName.bind(this);
    }

    componentDidMount(){
        this.mySwiper = new Swiper ('.sliderContainer', {
            direction: 'horizontal',
            loop:true,
            // If we need pagination
            pagination: '.swiper-pagination',
            paginationClickable:true,
            // Navigation arrows
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            keyboardControl:true,
            threshold:20,
            speed:500,
            initialSlide:0 + Math.floor( Math.random() * (8 - 0)),
            preloadImages:true,
            onInit:function(){
                if(Session.get("teamLoaded")){
                    TweenLite.to($(".sliderContainer"), 0.5, {autoAlpha:1});
                }else{
                    setTimeout(function(){
                        Session.set("teamLoaded", true);
                        TweenLite.to($(".sliderContainer"), 0.5, {autoAlpha:1});
                    },500);
                }
            },
            onTouchStart:(swiper, event)=>{
                if(!$(event.target).parent().hasClass("reroll") && !$(event.target).hasClass("fn") && !$(event.target).hasClass("reroll") && !$(event.target).hasClass("name")){
                    const index = swiper.activeIndex+1;
                    TweenLite.to($(".swiper-slide:nth-child("+index+") .content"), 0.3, {autoAlpha:0});
                }
            },
            onTouchEnd:(swiper, event)=>{
                const index = swiper.activeIndex+1;
                setTimeout(()=>{
                    TweenLite.to($(".swiper-slide:nth-child("+index+") .content"), 0.3, {autoAlpha:1});
                },300);
            },
            onTransitionEnd:(swiper)=>{
                const index = swiper.activeIndex+1;
                TweenLite.to($(".swiper-slide .content"), 0.3, {autoAlpha:0});
                TweenLite.to($(".swiper-slide:nth-child("+index+") .content"), 0.3, {autoAlpha:1});
            }
        });

        $(".posteContainer").each(function(index, element){
            const $this = $(this);
            const swiper = new Swiper(this, {
                speed: 500,
                nested:true,
                effect:"fade",
                loop:true,
                nextButton:$this.parent().find(".reroll")[0],
                fade:{
                    crossFade:true
                },
                noSwipingClass: 'swiper-no-swiping',
                autoHeight:true,
                setWrapperSize:false
            });
        });


    }

    releaseLastName(e){
        if($(window).width() > 1023){
            var dataIndex = $(e.target).parent().parent().parent().attr("data-swiper-slide-index"),
                firstName = $(".sliderContainer>.swiper-wrapper").find(".swiper-slide[data-swiper-slide-index="+dataIndex+"] .fn"),
                lastName = $(".sliderContainer>.swiper-wrapper").find(".swiper-slide[data-swiper-slide-index="+dataIndex+"] .ln"),
                releaseTl = new TimelineLite();
            releaseTl
                .add("release")
                .to(lastName, 0.3, {css:{right:0, transform:"translate(0, 0)"}}, "release")
                .to(lastName, 0.3, {autoAlpha:1}, "release+=0.15")
                .to(firstName, 0.3, {css:{left:0, transform:"translate(0, 0)"}}, "release")
            ;
        }
    }

    render() {
        return(
            <div className='teamContainer fadefx'>
                <div className='sliderNavigation'>
                    <div className="swiper-pagination"></div>
                </div>
                <div className='sliderContainer'>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className='content firstSwipe karl noselect'>
                                <p className='intro'><T>common.team.teamSlider.taglineM</T></p>
                                <h2 className='name'><span className='fn'>Karl</span> <span className='ln'>Talbot</span></h2>
                                <div className='posteContainer'>
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.kTitles.t1</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.kTitles.t2</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.kTitles.t3</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.kTitles.t4</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.kTitles.t5</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.kTitles.t61</T></p>
                                            <p className='poste'><T>common.team.teamSlider.kTitles.t62</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.kTitles.t7</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.kTitles.t8</T></p>
                                        </div>
                                    </div>
                                </div>

                                <button className='reroll'><div className='overReroll' onClick={this.releaseLastName}></div><T>common.team.teamSlider.boutonTitle</T></button>
                            </div>
                            <div className='person karl'></div>
                        </div>
                        {/*<div className="swiper-slide">
                            <div className='content ms noselect'>
                                <p className='intro'><T>common.team.teamSlider.taglineF</T></p>
                                <h2><span className='fn'>Marie-Soleil</span> <span className='ln'>LeHouillier</span></h2>
                                <div className='posteContainer'>
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.msTitles.t1</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.msTitles.t2</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.msTitles.t3</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.msTitles.t41</T></p>
                                            <p className='poste'><T>common.team.teamSlider.msTitles.t42</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.msTitles.t5</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.msTitles.t6</T></p>
                                        </div>
                                    </div>
                                </div>

                                <button className='reroll'><div className='overReroll' onClick={this.releaseLastName}></div><T>common.team.teamSlider.boutonTitle</T></button>
                            </div>
                            <div className='person msoleil'></div>
                        </div>*/}
                        {/*<div className="swiper-slide">
                            <div className='content arlette'>
                                <p className='intro'>Elle, c'est</p>
                                <h2><span className='fn'>Arlette</span> <span className='ln'>Nkurayija</span></h2>
                                <div className='posteContainer'>
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'>Avocate</p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'>Globe-trotteuse</p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'>Épicurienne</p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'>Adepte du yoga</p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'>La sage conseillère</p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'>Philanthrope</p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'>Celle qu’on doit conserver</p>
                                            <p className='poste'>entre 30°C et 40°C</p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'>Nomade</p>
                                        </div>
                                    </div>
                                </div>
                                <button className='reroll' onClick={this.releaseLastName}><T>common.team.teamSlider.boutonTitle</T></button>
                            </div>
                            <div className='person arlette'></div>
                        </div>*/}
                        <div className="swiper-slide">
                            <div className='content derick noselect'>
                                <p className='intro'><T>common.team.teamSlider.taglineM</T></p>
                                <h2><span className='fn'>Dérick</span> <span className='ln'>Paradis</span></h2>
                                <div className='posteContainer'>
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.dTitles.t1</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.dTitles.t2</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.dTitles.t31</T></p>
                                            <p className='poste'><T>common.team.teamSlider.dTitles.t32</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.dTitles.t41</T></p>
                                            <p className='poste'><T>common.team.teamSlider.dTitles.t42</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.dTitles.t51</T></p>
                                            <p className='poste'><T>common.team.teamSlider.dTitles.t52</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.dTitles.t6</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.dTitles.t7</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.dTitles.t81</T></p>
                                            <p className='poste'><T>common.team.teamSlider.dTitles.t82</T></p>
                                        </div>
                                    </div>
                                </div>

                                <button className='reroll'><div className='overReroll' onClick={this.releaseLastName}></div><T>common.team.teamSlider.boutonTitle</T></button>
                            </div>
                            <div className='person derick'></div>
                        </div>
                        <div className="swiper-slide">
                            <div className='content pl noselect'>
                                <p className='intro'><T>common.team.teamSlider.taglineM</T></p>
                                <h2><span className='fn'>Pierre-Luc</span> <span className='ln'>Robitaille</span></h2>
                                <div className='posteContainer'>
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.plTitles.t11</T></p>
                                            <p className='poste'><T>common.team.teamSlider.plTitles.t12</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.plTitles.t21</T></p>
                                            <p className='poste'><T>common.team.teamSlider.plTitles.t22</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.plTitles.t31</T></p>
                                            <p className='poste'><T>common.team.teamSlider.plTitles.t32</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.plTitles.t4</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.plTitles.t5</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.plTitles.t6</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.plTitles.t71</T></p>
                                            <p className='poste'><T>common.team.teamSlider.plTitles.t72</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.plTitles.t81</T></p>
                                            <p className='poste'><T>common.team.teamSlider.plTitles.t82</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.plTitles.t9</T></p>
                                        </div>
                                    </div>
                                </div>

                                <button className='reroll'><div className='overReroll' onClick={this.releaseLastName}></div><T>common.team.teamSlider.boutonTitle</T></button>
                            </div>
                            <div className='person pl'></div>
                        </div>
                        <div className="swiper-slide">
                            <div className='content mylene noselect'>
                                <p className='intro'><T>common.team.teamSlider.taglineF</T></p>
                                <h2><span className='fn'>Mylene</span> <span className='ln'>Geoffroy</span></h2>
                                <div className='posteContainer'>
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.myTitles.t1</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.myTitles.t2</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.myTitles.t3</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.myTitles.t4</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.myTitles.t5</T></p>
                                        </div>
                                    </div>
                                </div>

                                <button className='reroll'><div className='overReroll' onClick={this.releaseLastName}></div><T>common.team.teamSlider.boutonTitle</T></button>
                            </div>
                            <div className='person mylene'></div>
                        </div>
                        <div className="swiper-slide">
                            <div className='content eric noselect'>
                                <p className='intro'><T>common.team.teamSlider.taglineM</T></p>
                                <h2><span className='fn'>Eric</span> <span className='ln'>Yelle</span></h2>
                                <div className='posteContainer'>
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.eTitles.t11</T></p>
                                            <p className='poste'><T>common.team.teamSlider.eTitles.t12</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.eTitles.t2</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.eTitles.t3</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.eTitles.t4</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.eTitles.t5</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.eTitles.t61</T></p>
                                            <p className='poste'><T>common.team.teamSlider.eTitles.t62</T></p>
                                        </div>
                                    </div>
                                </div>

                                <button className='reroll'><div className='overReroll' onClick={this.releaseLastName}></div><T>common.team.teamSlider.boutonTitle</T></button>
                            </div>
                            <div className='person eric'></div>
                        </div>
                        <div className="swiper-slide">
                            <div className='content amelie noselect'>
                                <p className='intro'><T>common.team.teamSlider.taglineF</T></p>
                                <h2><span className='fn'>Amélie</span> <span className='ln'>Tremblay</span></h2>
                                <div className='posteContainer'>
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.aTitles.t11</T></p>
                                            <p className='poste'><T>common.team.teamSlider.aTitles.t12</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.aTitles.t2</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.aTitles.t3</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.aTitles.t4</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.aTitles.t5</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.aTitles.t6</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.aTitles.t71</T></p>
                                            <p className='poste'><T>common.team.teamSlider.aTitles.t72</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.aTitles.t8</T></p>
                                        </div>
                                        <div className="swiper-slide swiper-no-swiping">
                                            <p className='poste'><T>common.team.teamSlider.aTitles.t9</T></p>
                                        </div>
                                    </div>
                                </div>

                                <button className='reroll'><div className='overReroll' onClick={this.releaseLastName}></div><T>common.team.teamSlider.boutonTitle</T></button>
                            </div>
                            <div className='person amelie'></div>
                        </div>

                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        )
    }
}

