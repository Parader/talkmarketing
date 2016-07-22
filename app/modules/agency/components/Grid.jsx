import React from 'react';
import ReactDOM from 'react-dom';

import LoadMore from './LoadMore.jsx';
import SocialMedia from './SocialMedia';

const T = i18n.createComponent();

export default class Grid extends React.Component{
    constructor(){
        super();
        this.state = {
            canLoadMore:true
        }
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount(){
        this.grid = document.querySelector('.grid');
        this.pack = new Packery(this.grid, {
            itemSelector: '.grid-item',
            percentPosition: true,
            gutter: ".gutter-sizer"
        });
    }

    loadMore(){
        const item1 = document.createElement("div");
        item1.className = 'grid-item demiW tierH dinner hasBg';
        const item2 = document.createElement("div");
        item2.className = 'grid-item tier2H macWindows';
        const paragraph = document.createElement("p");
        const left = document.createElement("div");
        const right = document.createElement("div");
        left.className = "left";
        right.className = "right";
        const textNode1 = document.createTextNode(i18n.getTranslation("common.team.photos.computer"));
        const textNode2 = document.createTextNode("Mac");
        const textNode3 = document.createTextNode("Windows");
        const stat1Container = document.createElement("span");
        const stat2Container = document.createElement("span");
        const stat1 = document.createTextNode("50%");
        const stat2 = document.createTextNode("50%");
        const pc = document.createElement("img");
        pc.src = "/images/pc.svg";
        const mac = document.createElement("img");
        mac.src = "/images/mac.svg";
        stat1Container.appendChild( stat1 );
        stat2Container.appendChild( stat2 );
        paragraph.appendChild( textNode1 );
        left.appendChild( stat1Container );
        right.appendChild( stat2Container );
        left.appendChild( textNode2 );
        right.appendChild( textNode3 );
        left.appendChild( mac );
        right.appendChild( pc );

        item2.appendChild( paragraph );
        item2.appendChild( left );
        item2.appendChild( right );

        const item3 = document.createElement("div");
        item3.className = 'grid-item demiW tier2H emmerlaus';
        const item4 = document.createElement("div");
        item4.className = 'grid-item demiW tier2H plante';
        const planteContainer = document.createElement("div");
        const planteTitle = document.createElement("h6");
        const textNode4 = document.createTextNode(i18n.getTranslation("common.team.photos.plantTag"));
        const planteText = document.createElement("p");
        const textNode5 = document.createTextNode(i18n.getTranslation("common.team.photos.plant"));
        planteTitle.appendChild( textNode4 );
        planteText.appendChild( textNode5 );
        planteContainer.appendChild( planteTitle );
        planteContainer.appendChild( planteText );
        item4.appendChild( planteContainer );

        const item5 = document.createElement("div");
        item5.className = 'grid-item demiW tierH demiW carnaval';
        const item6 = document.createElement("div");
        item6.className = 'grid-item tierH tierW karl';
        const item7 = document.createElement("div");
        item7.className = 'grid-item tierH tier2W cochon hasBg';
        const items = [
            item1,
            item2,
            item3,
            item4,
            item5,
            item6,
            item7
        ];

        let fragment = document.createDocumentFragment();
        fragment.appendChild( items[0] );
        fragment.appendChild( items[1] );
        fragment.appendChild( items[2] );
        fragment.appendChild( items[3] );
        fragment.appendChild( items[4] );
        fragment.appendChild( items[5] );
        fragment.appendChild( items[6] );
        this.grid.appendChild( fragment );
        // add and lay out newly appended elements
        this.pack.appended( items );
        this.setState({
            canLoadMore:false
        });
        this.pack.layout();
    }

    render() {
        const loadMore = this.state.canLoadMore ? <LoadMore loadMore={this.loadMore} /> : <SocialMedia />;
        return(
            <div className='gridContainer'>
                <div className='grid'>
                    <div className='gutter-sizer'></div>
                    <div className='grid-sizer'> </div>

                    <div className='fadefx grid-item tierW tier2H orangeman hasBg'></div>
                    <div className='fadefx grid-item tier2H planet'>
                        <div className='txtCentered'>
                            <div className='overTextLine'></div>
                            <p><T>common.team.photos.travel1</T></p>
                            <p><T>common.team.photos.travel2</T></p>
                            <div className='planeIcon'>
                                <svg version="1.1" id="planeIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     width="66.7px" height="67.1px" viewBox="0 0 66.7 67.1" enableBackground="new 0 0 66.7 67.1" xmlSpace="preserve">
                                    <path fill="none" stroke="#FFFFFF" strokeWidth="1.4212" strokeMiterlimit="10" d="M63.6,2.8c-1.2-1.2-3.2-1.2-4.3,0l-7.9,7.9
                                            L32.5,6.4l-2.9,2.9l15.1,7.9l-7.9,7.9l-5-0.7l-2.2,2.2l6.5,3.6l3.6,6.5l2.2-2.2l-0.7-5l7.9-7.9l7.9,15.1l2.9-2.9l-4.3-18.8l7.9-7.9
                                            C64.7,6,64.7,4,63.6,2.8L63.6,2.8z M63.6,2.8"/>
                                    <polygon fill="#FFFFFF" points="27.6,18.9 1.5,44.7 27.3,18.6"/>
                                    <polygon fill="#FFFFFF" points="47.8,39.1 21.7,64.9 47.5,38.8"/>
                                    <polygon fill="#FFFFFF" points="28.9,37.8 11.6,54.8 28.6,37.5"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='fadefx grid-item tier2H tier2W bridge hasBg'></div>

                    <div className='fadefx grid-item tierW demiH grid-breuvage'>
                        <p><T>common.team.photos.drink</T></p>
                        <div className='breuvageContainer'>
                            <div className='breuvage'>
                                <div className='cafe'></div>
                                <div className='cafe'></div>
                                <div className='cafe'></div>
                                <div className='cafe'></div>
                                <div className='the'></div>
                                <div className='the'></div>
                                <div className='eau'></div>
                                <div className='eau'></div>
                            </div>
                        </div>
                    </div>
                    <div className='fadefx grid-item tier2W demiH equitation hasBg'></div>
                    <div className='fadefx grid-item demiH poutineville hasBg'>
                        <h6><T>common.team.photos.poutineTag</T></h6>
                        <p><T>common.team.photos.poutine</T></p>
                    </div>
                </div>

                {loadMore}
            </div>
        )
    }
}