import React from 'react';
import ReactDOM from 'react-dom';

import Arrow from "../../core/components/Arrow.jsx";

const T = i18n.createComponent();

export default class JobNavigation extends React.Component{
    render() {
        if(this.props.current == "motion-designer"){
            return(
                <div className='jobNavigationContainer'>
                    <p><T>common.motionDesigner.otherPositions.title</T></p>
                    <ul>
                        <li onClick={()=>{this.props.changeOffer(1, "frontendDev")}} ref='first'>
                            <T>common.frontEnd.title</T> <Arrow orientation='right' />
                            <span className='bg frontendDev'></span>
                            <span className='filter'></span>
                            <span className='scrollIndicator'><T>common.jobs.changeJob</T></span>
                        </li>
                        <li onClick={()=>{this.props.changeOffer(2, "spontaneous")}} ref='second'>
                            <T>common.team.jobs.spontaneous</T> <Arrow orientation='right' />
                            <span className='bg spontaneous'></span>
                            <span className='filter'></span>
                            <span className='scrollIndicator'><T>common.jobs.changeJob</T></span>
                        </li>
                    </ul>
                </div>
            )
        }else if(this.props.current == "frontendDev"){
            return(
                <div className='jobNavigationContainer'>
                    <p><T>common.motionDesigner.otherPositions.title</T></p>
                    <ul>
                        <li onClick={()=>{this.props.changeOffer(1, "motion-designer")}} ref='first'>
                            <T>common.motionDesigner.title</T> <Arrow orientation='right' />
                            <span className='bg motionDesigner'></span>
                            <span className='filter'></span>
                            <span className='scrollIndicator'><T>common.jobs.changeJob</T></span>
                        </li>
                        <li onClick={()=>{this.props.changeOffer(2, "spontaneous")}} ref='second'>
                            <T>common.team.jobs.spontaneous</T> <Arrow orientation='right' />
                            <span className='bg spontaneous'></span>
                            <span className='filter'></span>
                            <span className='scrollIndicator'><T>common.jobs.changeJob</T></span>
                        </li>
                    </ul>
                </div>
            )
        }else if(this.props.current == "spontaneous"){
            return(
                <div className='jobNavigationContainer'>
                    <p><T>common.motionDesigner.otherPositions.title</T></p>
                    <ul>
                        <li onClick={()=>{this.props.changeOffer(1, "frontendDev")}} ref='first'>
                            <T>common.frontEnd.title</T> <Arrow orientation='right' />
                            <span className='bg frontendDev'></span>
                            <span className='filter'></span>
                            <span className='scrollIndicator'><T>common.jobs.changeJob</T></span>
                        </li>
                        <li onClick={()=>{this.props.changeOffer(2, "motion-designer")}} ref='second'>
                            <T>common.motionDesigner.title</T> <Arrow orientation='right' />
                            <span className='bg motionDesigner'></span>
                            <span className='filter'></span>
                            <span className='scrollIndicator'><T>common.jobs.changeJob</T></span>
                        </li>
                    </ul>
                </div>
            )
        }

    }
}