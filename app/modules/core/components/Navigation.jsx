import React from 'react';
import ReactDOM from 'react-dom';

export default class Navigation extends React.Component {

    render() {
        return(
            <svg className="navigation" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 width="12px" height="121.1px" viewBox="0 0 12 121.1" enableBackground="new 0 0 12 121.1" xmlSpace="preserve">
                <circle className='navLink navLink0 active' onClick={()=> this.props.navigateTo(0)} fill="#210C42" cx="6" cy="6" r="6"/>
                <circle className='navLink navLink1' onClick={()=> this.props.navigateTo(1)} fill="#BCB3C6" cx="6" cy="42.4" r="6"/>
                <circle className='navLink navLink2' onClick={()=> this.props.navigateTo(2)} fill="#BCB3C6" cx="6" cy="78.7" r="6"/>
                <circle className='navLink navLink3' onClick={()=> this.props.navigateTo(3)} fill="#BCB3C6" cx="6" cy="115.1" r="6"/>
            </svg>
        )
    }
}