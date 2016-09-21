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
    }

    componentWillUnmount(){
        removeScroll();
    }

    openProject(e){
        e.preventDefault();
        if(scrollBar[0].scrollTop!=0){
            //scrollBar.scrollTop(0);
            const openTl = new TimelineLite({onComplete:()=>{
                FlowRouter.go("/expertise/ultimate-voice-builder");
            }});

            openTl
                .add("open")
                .to($(".mainContainer"), 0.3, {scrollTo:0}, "open")
                .to(this.refs.wrapper, 0.3, {css:{padding:0}}, "open+=0.3")
                .to($("header"), 0.3, {css:{top:-100}}, "open+=0.3")
                .to($(".similiSide.right"), 0.3, {x:"+=100%"}, "open+=0.3")
                .to($(".similiSide.left"), 0.3, {x:"-=100%"}, "open+=0.3")
                .to(this.refs.recentProject, 0.3, {height:"+=88px"}, "open+=0.3")
                .to(this.refs.voir, 0.3, {autoAlpha:0}, "open+=0.3")
                .to(this.refs.expContainer, 0.3, {css:{padding:0} }, "open+=0.3")
                .to(this.refs.word, 0.3, {autoAlpha:0}, "open+=0.3")
            ;
        }else{
            const openTl = new TimelineLite({onComplete:()=>{
                FlowRouter.go("/expertise/ultimate-voice-builder");
            }});

            openTl
                .add("open")
                .to(this.refs.wrapper, 0.3, {css:{padding:0}}, "open")
                .to($("header"), 0.3, {css:{top:-100}}, "open")
                .to($(".similiSide.right"), 0.3, {x:"+=100%"}, "open")
                .to($(".similiSide.left"), 0.3, {x:"-=100%"}, "open")
                .to(this.refs.recentProject, 0.3,{height:"+=88px"}, "open")
                .to(this.refs.voir, 0.3, {autoAlpha:0}, "open")
                .to(this.refs.expContainer, 0.3, {css:{padding:0} }, "open")
                .to(this.refs.word, 0.3, {autoAlpha:0}, "open")
            ;
        }
    }

    render() {
        /* META DATA */
        DocHead.setTitle('Talk - Expertise');
        /* /META DATA */
        return(
            <div className='wrapper' ref='wrapper'>
                {/*<div className='backgroundCover'>
                    <div className='similiSide left'></div>
                    <div className='similiSide right'></div>
                    <div className='filter'></div>
                </div>*/}
                <div className='expertiseContainer' ref='expContainer'>
                    <div className='backgroundCover'>
                        <div className='similiSide left'></div>
                        <div className='similiSide right'></div>
                        <div className='filter'></div>
                    </div>
                    <div className='recentProjects section'>
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
                                </div>

                                <div className='voir' ref='voir'>
                                    <button className='btnShadow' onClick={this.openProject}><T>common.expertise.project.Button</T> <Arrow orientation="right" /></button>
                                </div>
                            </ReactCSSTransitionGroup>
                        </div>
                    </div>
                    <div className='services section'>
                        <div className='title'>
                            <h4 className='miniTitle fadefx'><T>common.expertise.servicelist.tag</T></h4>
                            <h1 className='fadefx'><T>common.expertise.servicelist.title</T></h1>
                        </div>
                        <div className='row fadefx'>
                            <div className='serviceSection col s12 m6 l3'>
                                <h2 className='title'><T>common.expertise.servicelist.strategy.title</T></h2>
                                <ul>
                                    <li><T>common.expertise.servicelist.strategy.i1</T></li>
                                    <li><T>common.expertise.servicelist.strategy.i2</T></li>
                                    <li><T>common.expertise.servicelist.strategy.i3</T></li>
                                    <li><T>common.expertise.servicelist.strategy.i4</T></li>
                                    <li><T>common.expertise.servicelist.strategy.i5</T></li>
                                </ul>
                            </div>
                            <div className='serviceSection col s12 m6 l3'>
                                <h2 className='title'><T>common.expertise.servicelist.production.title</T></h2>
                                <ul>
                                    <li><T>common.expertise.servicelist.production.i1</T></li>
                                    <li><T>common.expertise.servicelist.production.i2</T></li>
                                    <li><T>common.expertise.servicelist.production.i3</T></li>
                                    <li><T>common.expertise.servicelist.production.i4</T></li>
                                </ul>
                            </div>
                            <div className='serviceSection col s12 m6 l3'>
                                <h2 className='title'><T>common.expertise.servicelist.support.title</T></h2>
                                <ul>
                                    <li><T>common.expertise.servicelist.support.i1</T></li>
                                    <li><T>common.expertise.servicelist.support.i2</T></li>
                                    <li><T>common.expertise.servicelist.support.i3</T></li>
                                    <li><T>common.expertise.servicelist.support.i4</T></li>
                                </ul>
                            </div>
                            <div className='serviceSection col s12 m6 l3'>
                                <h2 className='title'><T>common.expertise.servicelist.leftover.title</T></h2>
                                <ul>
                                    <li><T>common.expertise.servicelist.leftover.i1</T></li>
                                    <li><T>common.expertise.servicelist.leftover.i2</T></li>
                                    <li><T>common.expertise.servicelist.leftover.i3</T></li>
                                    <li><T>common.expertise.servicelist.leftover.i4</T></li>
                                    <li><T>common.expertise.servicelist.leftover.i5</T></li>
                                </ul>
                            </div>
                        </div>
                        <div className='bgArms'>
                            <Arms />
                        </div>
                    </div>
                    <div className='dashboard section'>
                        <DashboardSlider />
                    </div>
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