import React from 'react';
import ReactDOM from 'react-dom';

import Arrow from '../../core/components/Arrow.jsx';

const T = i18n.createComponent();

export default class Footer extends React.Component{


    render() {
        return(
            <div className='singleProjectFooter'>
                <div className='left'>
                    <span onClick={this.props.goUp}><T>common.uvbProjects.buttonTop</T> <Arrow orientation='up' /></span>
                </div>
                <div className='right'>
                    <span onClick={this.props.close}><T>common.uvbProjects.buttonClose</T> <img src="/images/closeX_dark.svg" /></span>
                </div>
            </div>
        )
    }
}