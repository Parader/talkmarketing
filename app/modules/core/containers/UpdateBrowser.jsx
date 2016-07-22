import React from 'react';
import ReactDOM from 'react-dom';

import Arrow from '../../core/components/Arrow.jsx';


export default class BrowserUpdate extends React.Component{


    render() {
        return(
            <div className='wrapper' ref='wrapper'>
                <div className='browserUpdateContainer'>
                    <h1>Did you know that your browser is out of date?</h1>
                    <p>This site is optimized for recent browsers. Firefox, Chrome and Safari are recommended. You will find below the links to download them. Just click on the icons to get to the download page</p>
                    <div className='browserContainer'>
                        <a href='http://www.google.com/chrome' target="_blank" ><img src='/images/browser/browser_chrome.gif' /></a>
                        <a href='http://www.mozilla.com/firefox/' target="_blank"><img src='/images/browser/browser_firefox.gif' /></a>
                        <a href='http://www.microsoft.com/windows/Internet-explorer/default.aspx' target="_blank"><img src='/images/browser/browser_ie.gif' /></a>
                        <a href='http://www.opera.com/download/' target="_blank"><img src='/images/browser/browser_opera.gif' /></a>
                        <a href='http://www.apple.com/safari/download/' target="_blank"><img src='/images/browser/browser_safari.gif' /></a>
                    </div>
                </div>
            </div>
        )
    }
}