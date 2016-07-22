import React from 'react';
import ReactDOM from 'react-dom';

import MiniPlay from '../components/MiniPlay.jsx';

const T = i18n.createComponent();

export default class Grid extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
        var $pack = new Packery(document.querySelector('.grid'), {
            itemSelector: '.grid-item',
            percentPosition: false,
            gutter: ".gutter-sizer"
        });
        $('.lightgallery').lightGallery({
            mode:"lg-soft-zoom",
            download: false,
            selector: '.item',
            pager:false,
            zoom:false,
            hash:false,
            fullScreen:false,
            counter:false
        });
    }

    render() {
        return(
            <div className='gridContainer'>
                <div className='grid'>
                    <div className='gutter-sizer'></div>
                    <div className='grid-sizer'> </div>

                    <div className='fadefx grid-item hasBg tier2H synesweb'></div>
                    <div className='fadefx grid-item hasBg demiH aimee'></div>

                    <span className='lightgallery'>
                        <a className="item" href='https://vimeo.com/161960438' >
                            <div className='fadefx grid-item hasBg demiH demiW phitvid isVideo'>
                                <div className='overlay'></div>
                                <div className='play'><T>common.expertise.projects.video</T> <MiniPlay /></div>
                            </div>
                        </a>
                    </span>
                    <div className='fadefx grid-item hasBg demiH demiW wceweb'></div>

                    <div className='fadefx grid-item hasBg tierH tier2W silencedweb'></div>
                    <div className='fadefx grid-item hasBg tierW tierH silencedlogo'></div>

                    <span className='lightgallery'>
                        <a className="item" href='https://www.youtube.com/watch?v=ULe9qmFM6AE?rel=0' >
                            <div className='fadefx grid-item hasBg demiW tier2H silencedvid isVideo'>
                                <div className='overlay'></div>
                                <div className='play'><T>common.expertise.projects.video</T> <MiniPlay /></div>
                            </div>
                        </a>
                    </span>
                    <div className='fadefx grid-item hasBg tier2W tier2H mmvmweb'></div>
                    <div className='fadefx grid-item hasBg demiW tier2H googleplex'></div>
                    <div className='fadefx grid-item hasBg tierW tier2H mmvmbook'></div>


                    <div className='fadefx grid-item hasBg tierW tierH wcelogo'></div>
                    <div className='fadefx grid-item hasBg tierH divaapp'></div>
                    <div className='fadefx grid-item hasBg tierW tierH mmvmlogo'></div>
                    <div className='fadefx grid-item hasBg tierH tierW bradfullogo'></div>

                </div>
            </div>
        )
    }
}