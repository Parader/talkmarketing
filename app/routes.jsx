import React from 'react';
import {mount} from 'react-mounter';
import i18n from 'meteor/universe:i18n';

import Layout from './modules/core/components/MainLayout.jsx';
import HeaderContainer from './modules/core/containers/HeaderContainer.jsx';
import HomeContainer from './modules/home/containers/HomeContainer.jsx';
import Expertise from './modules/expertise/containers/Expertise.jsx';
import Agency from './modules/agency/containers/Agency.jsx';
import Contact from './modules/contact/containers/Contact.jsx';
import UltimateVoiceBuilder from './modules/projects/containers/UltimateVoiceBuilder.jsx';
import MotionDesigner from './modules/jobs/containers/MotionDesigner.jsx';
import FrontendDev from './modules/jobs/containers/FrontendDev.jsx';
import MarketingDir from './modules/jobs/containers/MarketingDir.jsx';
import SpontaneousApplication from './modules/jobs/containers/SpontaneousApplication.jsx';
import Privacy from './modules/core/containers/Privacy.jsx';
import The404 from './modules/404/containers/The404.jsx';
import UpdateBrowser from './modules/core/containers/UpdateBrowser.jsx';

/* SCROLLBAR */
scrollBar = null;
createScroll = function (){
    scrollBar = $('.mainContainer').scrollbar({
        "onScroll": function(y, x){
            if(Meteor.isClient){
                if(Session.get("inJobs") && Session.get("changeOfferActive")){
                    if(y.scroll >= Session.get("maxScroll")){
                        $(".mainContainer").scrollTop(Session.get("maxScroll"));
                        Session.set("changeOfferActive", false);
                        FlowRouter.go("/jobs/"+Session.get("nextPage"));
                    }
                }
            }
        }
    });
    $.fn.is_on_screen = function(){
        let win = $(".mainContainer");
        let viewport = {
            top : win.scrollTop()-200,
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        let bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    $(".mainContainer").scroll(function(){
        let wWidth = $(window).width();
        if(wWidth < 768) return;
        fadeEffect();
    });

    fadeEffect();

    function fadeEffect(){
        //FADE IN
        $(".fadefx").each(function(){
            if( $(this).is_on_screen() ) {
                $(this).addClass("fade-in");
            }
        });
    }
}
removeScroll = function (){
    $(".mainContainer").scrollTop(0);
    if(scrollBar)
        scrollBar.destroy();
    $(window).off("scroll");
}
/* /SCROLLBAR */


if(Meteor.isServer) {
  var timeInMillis = 43200000; // 12hrs
  FlowRouter.setPageCacheTimeout(timeInMillis)
}

normalRoute = FlowRouter.group({
    triggersEnter:[function(context, redirect) {
        if (!Modernizr.flexbox) {
            window.location.href = "/update-browser";
        }else{
            let gaScript = 'https://www.google-analytics.com/analytics.js';
            DocHead.loadScript(gaScript, function() {
                ga('create', Meteor.settings.public.ga.account, 'auto');
                ga('send', 'pageview');
            });
        }
    }]
});

normalRoute.route('/', {
    name:"home",
    action(context) {
        mount(Layout, {
            header: <HeaderContainer isAnimation={true} />,
            content: () => (
                <HomeContainer />
            )
        });
    }
});

normalRoute.route('/agence', {
    name:"agency",
    action() {
        mount(Layout, {
            header: <HeaderContainer active='link1' />,
            content: () => (
                <Agency />
            )
        });
    }
});

normalRoute.route('/expertise', {
    name:"expertise",
    action() {
        mount(Layout, {
            header: <HeaderContainer active='link2' />,
            content: () => (
                <Expertise />
            )
        });
    }
});

normalRoute.route('/contact', {
    name:"contact",
    action() {
        mount(Layout, {
            header: <HeaderContainer active='link3' isFixed={true} />,
            content: () => (
                <Contact />
            )
        });
    }
});

normalRoute.route('/expertise/:projectName', {
    action() {
        var projectName = FlowRouter.getParam("projectName");
        if(projectName == "ultimate-voice-builder"){
            mount(Layout, {
                content: () => (
                    <UltimateVoiceBuilder />
                )
            });
        }
    }
});

normalRoute.route('/jobs/:post', {
    action() {
        var postName = FlowRouter.getParam("post");
        if(postName == "motion-designer"){
            mount(Layout, {
                content: () => (
                    <MotionDesigner />
                )
            });
        }else if(postName == "frontendDev"){
            mount(Layout, {
                content: () => (
                    <FrontendDev />
                )
            });
        }else if(postName == "directeur-marketing"){
            mount(Layout, {
                content: () => (
                    <MarketingDir />
                )
            });
        }else{
            mount(Layout, {
                content: () => (
                    <SpontaneousApplication />
                )
            });
        }
    }
});

normalRoute.route('/privacy', {
    action() {
        mount(Layout, {
            header: <HeaderContainer isFixed={true} />,
            content: () => (
                <Privacy />
            )
        });
    }
});

normalRoute.route('/404', {
    name:"404",
    action() {
        mount(Layout, {
            header: <HeaderContainer isFixed={true} />,
            content: () => (
                <The404 />
            )
        });
    }
});

FlowRouter.notFound = {
    action: function() {
        FlowRouter.go("404");
    }
};

FlowRouter.route('/update-browser', {
    name:"updateBrowser",
    action() {
        mount(Layout, {
            header: <HeaderContainer isFixed={true} />,
            content: () => (
                <UpdateBrowser />
            )
        });
    }
});


