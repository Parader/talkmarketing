import React from 'react';
import ReactDOM from 'react-dom';

const Layout = ({content, header}) => (
    <div className='mainContainer'>
    	{header}
        <div className='mainLayout'>
            {content()}
        </div>
    </div>
);

export default Layout;