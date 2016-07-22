import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import i18n from 'meteor/universe:i18n';

import Logo from '../components/Logo.jsx';
import Navigation from '../components/Navigation.jsx';

const T = i18n.createComponent();

export default class HeaderContainer extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        if(Meteor.isClient){
            Session.set("sideMarges", parseFloat(window.getComputedStyle(document.getElementsByClassName('wrapper')[0], null).getPropertyValue('padding-left'))*2);
        if($(window).width()<768){
                $("html").addClass("mobile");
            }
        }
        this.setState({
            active:typeof this.props.active != undefined ? this.props.active : ""
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        if(!this.props.isAnimation){
            $("#react-root").unmousewheel(this.handleScroll);
        }
    }

    handleResize(e){
        if(Meteor.isClient){
            Session.set("sideMarges", parseFloat(window.getComputedStyle(document.getElementsByClassName('wrapper')[0], null).getPropertyValue('padding-left'))*2);
        }
    }


    changeLang(){
        if(i18n.getLocale() == "en-US"){
            i18n.setLocale("fr-CA");
            $("html").addClass("fr");
            $("html").removeClass("en");
        }else if(i18n.getLocale() == "fr-CA"){
            i18n.setLocale("en-US");
            $("html").addClass("en");
            $("html").removeClass("fr");
        }
    }

    render(props) {
        const classHeader = this.props.isFixed ? "header fixed" : "header";
        //const navigation = !this.props.isAnimation && !this.props.isFixed ? <div className='pageNavContainer'><Navigation navigateTo={this.navigateTo} /></div> : null;

        return(

            <header className={classHeader} ref='header'>
                <div className="headerContainer">
                    <div className="logoContainer">
                        <Logo />
                    </div>
                    <nav className="menu">
                        <ul className='menuContainer'>
                            <li className={(this.props.active === "link1") ? "elem active":"elem"}><a href="/agence">
                                <T>common.menu.menu1</T>
                            </a></li>
                            <li className={(this.props.active === "link2") ? "elem active center":"elem center"}><a href="/expertise"><T>common.menu.menu2</T></a></li>
                            <li className={(this.props.active === "link3") ? "elem active contact":"elem contact"}><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                    <nav className="subMenu">
                        <div className="subMenuContainer">
                            <div className="context">
                                <ul>
                                    <li className='elem hoverClick' onClick={this.changeLang}><T>common.menu.lang</T></li>
                                    {/*<li className='espaceClient'><a href="http://client.talk.marketing" target='_blank'><T>common.menu.dashboard</T></a></li>*/}

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        )

    }
}