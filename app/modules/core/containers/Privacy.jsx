import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Footer from '../../core/containers/Footer.jsx';
import Arrow from '../../core/components/Arrow.jsx';

const T = i18n.createComponent();

export default class Privacy extends React.Component{
    componentDidMount(){
        createScroll();
    }

    componentWillUnmount(){
        removeScroll();
    }

    render() {
        return(
            <div className='wrapper' ref='wrapper'>
                <ReactCSSTransitionGroup
                        component='div'
                        className='privacyContainer'
                        transitionName='contentLoad'//class
                        transitionAppearTimeout={600}
                        transitionEnterTimeout={600}//time to enter
                        transitionLeaveTimeout={400}//Time to leave
                        transitionAppear={true}
                        >

                    <h1><T>common.privacy.t1</T></h1>

                    <p><T>common.privacy.p1</T></p>

                    <h2><T>common.privacy.t2</T></h2>

                    <p><T>common.privacy.p2</T></p>

                    <h2><T>common.privacy.t3</T></h2>

                    <p><T>common.privacy.p3</T></p>

                    <h2><T>common.privacy.t4</T></h2>

                    <p><T>common.privacy.p4</T></p>

                    <h2><T>common.privacy.t5</T></h2>

                    <p><T>common.privacy.p5</T></p>

                    <h2><T>common.privacy.t6</T></h2>

                    <p><T>common.privacy.p6</T></p>
                </ReactCSSTransitionGroup>

                <Footer />
            </div>
        )
    }
}