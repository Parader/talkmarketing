import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Arrow from '../../core/components/Arrow.jsx';
import Arms from '../components/Arms.jsx';
import DashboardSlider from '../components/DashboardSlider.jsx';
import Footer from '../../core/containers/Footer.jsx';
import Grid from '../components/Grid.jsx';

const T = i18n.createComponent();

export default class Expertise extends React.Component{
    constructor(){
        super();
        this.openProject = this.openProject.bind(this);
    }

    componentDidMount(){
        createScroll();
        if(Meteor.isClient){//if from projects, scroll to projects
            const fromProjects = Session.get("inProjects") ? true : false;
            if(fromProjects){
                //scrollBar.setScrollTop(Session.get("agencyScrollAmount"));
                $(".mainContainer").scrollTop($(".recentProjects").position().top);
                Session.set("inProjects", false);
            }
        }
        let $exp = {
            full:document.getElementById("ExpertiseFull"),
            arm1:{
                full:document.getElementById("ExpertiseArm1Full"),
                tool:document.getElementById("ExpertiseArm1Pen"),
                hand:document.getElementById("ExpertiseArm1Hand"),
                arm:document.getElementById("ExpertiseArm1"),
                line1:$("#exp1Line1 line"),
                line2:$("#exp1Line2 line"),
                handNtool:$("#ExpertiseArm1Full .handNtool")
            },
            arm2:{
                full:document.getElementById("ExpertiseArm2Full"),
                tool:document.getElementById("ExpertiseArm2MagGlass"),
                hand:document.getElementById("ExpertiseArm2Hand"),
                arm:document.getElementById("ExpertiseArm2"),
                line1:$("#exp2Line1 line"),
                line2:$("#exp2Line2 line"),
                handNtool:$("#ExpertiseArm2Full .handNtool")
            },
            arm3:{
                full:document.getElementById("ExpertiseArm3Full"),
                tool:document.getElementById("ExpertiseArm3Camera"),
                hand:document.getElementById("doigt"),
                arm:document.getElementById("ExpertiseArm3"),
                handNtool:$("#ExpertiseArm3Full .handNtool"),
                line1:$("#exp3Line1 line"),
                line2:$("#exp3Line2 line")
            },
            arm4:{
                full:document.getElementById("ExpertiseArm4Full"),
                tool:document.getElementById("ExpertiseArm4Mouse"),
                hand:document.getElementById("ExpertiseArm4Hand"),
                arm:document.getElementById("ExpertiseArm4"),
                line1:$("#exp4Line1 line"),
                line2:$("#exp4Line2 line"),
                handNtool:$("#ExpertiseArm4Full .handNtool")
            },
            arm5:{
                full:document.getElementById("ExpertiseArm5Full"),
                left:document.getElementById("ExpertiseArm5Left"),
                hand:document.getElementById("ExpertiseArm5Hands"),
                arm:document.getElementById("ExpertiseArm5"),
                right:document.getElementById("ExpertiseArm5Right"),
                line1:$("#exp5Line1 line"),
                line2:$("#exp5Line2 line"),
                line3:$("#exp5Line3 line"),
                line4:$("#exp5Line4 line")
            }
        }

        let enterTl = new TimelineMax({onComplete:function(){
            let armsTl = new TimelineMax();
            let savoirTl = new TimelineMax();
            armsTl
                .add("move")
                .to($exp.arm1.handNtool, 0.15, {rotation:-8, transformOrigin:"50% 100%", ease:Power1.easeInOut}, "move+=0")
                .to($exp.arm1.handNtool, 0.13, {rotation:8, transformOrigin:"50% 100%", ease:Power1.easeOut}, "move+=0.15")
                .to($exp.arm1.handNtool, 1.20, {rotation:0, transformOrigin:"50% 100%", ease:Elastic.easeOut.config(2, 0.5)}, "move+=0.28")

                .to($exp.arm2.handNtool, 0.15, {rotation:8, transformOrigin:"50% 100%", ease:Power1.easeInOut}, "move+=0.2")
                .to($exp.arm2.handNtool, 0.13, {rotation:-8, transformOrigin:"50% 100%", ease:Power1.easeOut}, "move+=0.35")
                .to($exp.arm2.handNtool, 1.20, {rotation:0, transformOrigin:"50% 100%", ease:Elastic.easeOut.config(2, 0.5)}, "move+=0.48")

                .to($exp.arm4.handNtool, 0.15, {rotation:-4, transformOrigin:"50% 100%", ease:Power1.easeInOut}, "move+=0.3")
                .to($exp.arm4.handNtool, 0.13, {rotation:4, transformOrigin:"50% 100%", ease:Power1.easeOut}, "move+=0.45")
                .to($exp.arm4.handNtool, 1.20, {rotation:0, transformOrigin:"50% 100%", ease:Elastic.easeOut.config(2, 0.5)}, "move+=0.58")

                .to($exp.arm3.handNtool, 0.15, {rotation:-8, transformOrigin:"95% 95%", ease:Power1.easeInOut}, "move+=0.4")
                .to($exp.arm3.handNtool, 0.13, {rotation:6, transformOrigin:"95% 95%", ease:Power1.easeOut}, "move+=0.55")
                .to($exp.arm3.handNtool, 1.20, {rotation:0, transformOrigin:"95% 95%", ease:Elastic.easeOut.config(2, 0.5)}, "move+=0.68")

                .to($exp.arm5.full, 0.1, {autoAlpha:1}, "move+=0.35")
                .to($exp.arm5.left, 0.2, {rotation:2, transformOrigin:"0% 0%"}, "move+=0.25")
                .to($exp.arm5.left, 0.3, {rotation:-2, transformOrigin:"0% 0%"}, "move+=0.45")
                .to($exp.arm5.left, 0.3, {rotation:0, transformOrigin:"0% 0%", x:0}, "move+=0.75")
                .to($exp.arm5.hand, 0.2, {y:60}, "move+=0.25")
                .to($exp.arm5.hand, 0.3, {y:-55}, "move+=0.45")
                .to($exp.arm5.hand, 0.3, {y:0}, "move+=0.75")
                .to($exp.arm5.right, 0.2, {rotation:-2, transformOrigin:"100% 0%"}, "move+=0.25")
                .to($exp.arm5.right, 0.3, {rotation:2, transformOrigin:"100% 0%"}, "move+=0.45")
                .to($exp.arm5.right, 0.3, {rotation:0, transformOrigin:"100% 0%", x:0}, "move+=0.75")

                .to($exp.arm5.right, 0.3, {x:10}, "move+=0.45")
                .to($exp.arm5.left, 0.3, {x:-10}, "move+=0.45")

                .to($exp.arm1.line1, 0.1, {drawSVG:"0% 100%"}, "move+=0.05")
                .to($exp.arm1.line2, 0.1, {drawSVG:"0% 100%"}, "move+=0.1")
                .to($exp.arm1.line1, 0.1, {drawSVG:"100% 100%"}, "move+=0.15")
                .to($exp.arm1.line2, 0.1, {drawSVG:"100% 100%"}, "move+=0.2")

                .to($exp.arm2.line1, 0.1, {drawSVG:"0% 100%"}, "move+=0.25")
                .to($exp.arm2.line2, 0.1, {drawSVG:"0% 100%"}, "move+=0.3")
                .to($exp.arm2.line1, 0.1, {drawSVG:"100% 100%"}, "move+=0.35")
                .to($exp.arm2.line2, 0.1, {drawSVG:"100% 100%"}, "move+=0.4")

                .to($exp.arm3.line1, 0.1, {drawSVG:"0% 100%"}, "move+=0.4")
                .to($exp.arm3.line2, 0.1, {drawSVG:"0% 100%"}, "move+=0.45")
                .to($exp.arm3.line1, 0.1, {drawSVG:"100% 100%"}, "move+=0.5")
                .to($exp.arm3.line2, 0.1, {drawSVG:"100% 100%"}, "move+=0.55")

                .to($exp.arm4.line1, 0.1, {drawSVG:"0% 100%"}, "move+=0.3")
                .to($exp.arm4.line2, 0.1, {drawSVG:"0% 100%"}, "move+=0.35")
                .to($exp.arm4.line1, 0.1, {drawSVG:"100% 100%"}, "move+=0.4")
                .to($exp.arm4.line2, 0.1, {drawSVG:"100% 100%"}, "move+=0.45")

                .to($exp.arm5.line1, 0.1, {drawSVG:"0% 100%"}, "move+=0.3")
                .to($exp.arm5.line2, 0.1, {drawSVG:"0% 100%"}, "move+=0.35")
                .to($exp.arm5.line3, 0.1, {drawSVG:"0% 100%"}, "move+=0.3")
                .to($exp.arm5.line4, 0.1, {drawSVG:"0% 100%"}, "move+=0.35")

                .to($exp.arm5.line1, 0.1, {drawSVG:"100% 100%"}, "move+=0.4")
                .to($exp.arm5.line2, 0.1, {drawSVG:"100% 100%"}, "move+=0.45")
                .to($exp.arm5.line3, 0.1, {drawSVG:"100% 100%"}, "move+=0.4")
                .to($exp.arm5.line4, 0.1, {drawSVG:"100% 100%"}, "move+=0.45")
            ;
            savoirTl
                .add("savoir")
                .set([$exp.arm1.line1, $exp.arm1.line2, $exp.arm2.line1, $exp.arm2.line2, $exp.arm3.line1, $exp.arm3.line2, $exp.arm4.line1, $exp.arm4.line2, $exp.arm5.line1, $exp.arm5.line2, $exp.arm5.line3, $exp.arm5.line4], {drawSVG:"0% 0%"}, "savoir")
                .set($exp.full, {autoAlpha:1}, "savoir+=0.01")
                .set([$exp.arm1.full, $exp.arm2.full, $exp.arm3.full, $exp.arm4.full], {y:600}, "savoir")
                .set([$exp.arm5.full], {y:-900, autoAlpha:0}, "savoir")
                .to($exp.arm1.full, 1, {y:0, ease:Elastic.easeOut.config(1, 0.5)}, "savoir")
                .to($exp.arm2.full, 1, {y:0, ease:Elastic.easeOut.config(1, 0.5)}, "savoir+=0.2")
                .to($exp.arm4.full, 1, {y:0, ease:Elastic.easeOut.config(1, 0.5)}, "savoir+=0.3")
                .to($exp.arm3.full, 1, {y:0, ease:Elastic.easeOut.config(1, 0.5)}, "savoir+=0.4")
                .to($exp.arm5.full, 1, {y:0, ease:Elastic.easeOut.config(1, 0.5)}, "savoir+=0.25")
                .add(armsTl, "savoir")
            ;
        }});


        enterTl
            .add("start")
            .to($("h1.specFx"), 0.3, {autoAlpha:1}, "start+=0.1")
            .to($("h4.specFx"), 0.4, {autoAlpha:1}, "start+=0.2")
            .to($(".title.specFx"), 0.3, {autoAlpha:1}, "start+=0.3")
            .staggerTo($(".first li.specFx"), 0.3, {autoAlpha:1}, 0.1, "start+=0.4")
            .staggerTo($(".last li.specFx"), 0.3, {autoAlpha:1}, 0.1, "start+=0.4")
        ;
    }

    componentWillUnmount(){
        removeScroll();
    }

    openProject(e){
        e.preventDefault();
        let position = $(".recentProjects").position().top ;

        const openTl = new TimelineLite({onComplete:()=>{
            FlowRouter.go("/expertise/ultimate-voice-builder");
        }});

        openTl
            .add("open")
            .to($(".mainContainer.scroll-content"), 0.3, {scrollTo:position}, "open")
            .to(this.refs.wrapper, 0.3, {css:{padding:0}}, "open+=0.3")
            .to($("header"), 0.3, {css:{top:-100}}, "open+=0.3")
            .to($(".similiSide.right"), 0.3, {x:"+=100%"}, "open+=0.3")
            .to($(".similiSide.left"), 0.3, {x:"-=100%"}, "open+=0.3")
            //.to(this.refs.recentProject, 0.3, {height:"+=88px"}, "open+=0.3")
            .to(this.refs.voir, 0.3, {autoAlpha:0}, "open+=0.3")
            //.to(this.refs.expContainer, 0.3, {css:{padding:0} }, "open+=0.3")
            .to(this.refs.word, 0.3, {autoAlpha:0}, "open+=0.3")
        ;
    }

    render() {
        /* META DATA */
        DocHead.setTitle('Talk - Expertise');
        /* /META DATA */
        return(
            <div className='wrapper' ref='wrapper'>

                <div className='expertiseContainer' ref='expContainer'>
                    <div className='services section'>
                        <div className='title'>
                            <h1 className='miniTitle specFx'><T>common.expertise.servicelist.tag</T></h1>
                            <h4 className='specFx'><T>common.expertise.servicelist.title</T></h4>
                        </div>
                        <div className='servicesContent'>
                            <div className='serviceSection first'>
                                <h2 className='title specFx'><T>common.expertise.servicelist.strategy.title</T></h2>
                                <ul>
                                    <li className='specFx' ><T>common.expertise.servicelist.strategy.i1</T></li>
                                    <li className='specFx' ><T>common.expertise.servicelist.strategy.i2</T></li>
                                    <li className='specFx' ><T>common.expertise.servicelist.strategy.i3</T></li>
                                    <li className='specFx' ><T>common.expertise.servicelist.strategy.i4</T></li>
                                </ul>
                            </div>
                            <div className='serviceSection last'>
                                <h2 className='title specFx'><T>common.expertise.servicelist.production.title</T></h2>
                                <ul>
                                    <li className='specFx' ><T>common.expertise.servicelist.production.i1</T></li>
                                    <li className='specFx' ><T>common.expertise.servicelist.production.i2</T></li>
                                    <li className='specFx' ><T>common.expertise.servicelist.production.i3</T></li>
                                    <li className='specFx' ><T>common.expertise.servicelist.production.i4</T></li>
                                </ul>
                            </div>
                        </div>
                        <div className='bgArms'>
                            <Arms />
                        </div>
                    </div>

                    <div className='recentProjects section fadefx' ref='projectShow'>
                        <div className='backgroundCover' ref='bg'>
                            <div className='similiSide left'></div>
                            <div className='similiSide right'></div>
                            <div className='filter'></div>
                        </div>
                        <div className='recentProject' ref="recentProject">

                            <ReactCSSTransitionGroup
                                transitionName='contentLoad'//class
                                transitionAppearTimeout={600}
                                transitionEnterTimeout={600}//time to enter
                                transitionLeaveTimeout={400}//Time to leave
                                transitionAppear={true}
                                >
                                <div className='content'>
                                    <h1 ref='word'><T>common.expertise.project.Tag</T></h1>
                                    <p className='hook'><T>common.expertise.project.Title</T></p>
                                    <div className='voir' ref='voir'>
                                        <button className='newBtn' onClick={this.openProject}><T>common.expertise.project.Button</T> <Arrow orientation="right" /></button>
                                    </div>
                                </div>


                            </ReactCSSTransitionGroup>
                        </div>
                    </div>

                    {/*<div className='dashboard section'>
                        <DashboardSlider />
                    </div>*/}
                    <div className='showCase section'>
                        <h4 className='miniTitle fadefx'><T>common.expertise.projects.tag</T></h4>
                        <h2 className='fadefx'><T>common.expertise.projects.title</T></h2>
                        <Grid />
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}