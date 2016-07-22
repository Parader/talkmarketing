import React from 'react';
import ReactDOM from 'react-dom';

export default class Arrow extends React.Component {
    render() {
        if(this.props.orientation == "right"){
            return(
                <span className='arrowrap'>
                    <svg className='arrowContainer arrowRight' x="0px" y="0px"
                     width="20.8px" height="15.2px" viewBox="0 0 20.8 15.2" enableBackground="new 0 0 20.8 15.2">
                        <polygon className='arrow' fill="#383838" points="20.8,7.5 13.3,15 12.5,14.1 18.5,8.1 0,8.1 0,6.9 18.5,6.9 12.5,0.9 13.3,0 20,6.6 "/>
                    </svg>
                </span>
            )
        }else if(this.props.orientation == "up"){
            return(
                <span className='arrowrap'>
                    <svg className='arrowContainer arrowUp' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         width="15px" height="21px" viewBox="0 0 15 21" enableBackground="new 0 0 15 21" xmlSpace="preserve">
                        <polygon className='arrow' fill="#FFFFFF" points="7.5,0.1 15,7.6 14.1,8.4 8.1,2.4 8.1,20.9 6.9,20.9 6.9,2.4 0.9,8.4 0,7.6 6.6,0.9 "/>
                    </svg>
                </span>
            )
        }else if(this.props.orientation == "down"){
            return(
                <span className='arrowrap'>
                    <svg className='arrowContainer arrowDown' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         width="15px" height="21px" viewBox="0 0 15 21" enableBackground="new 0 0 15 21" xmlSpace="preserve">
                        <polygon className='arrow' fill="#FFFFFF" points="7.5,20.9 0,13.4 0.9,12.6 6.9,18.6 6.9,0.1 8.1,0.1 8.1,18.6 14.1,12.6 15,13.4 8.4,20.1 "/>
                    </svg>
                </span>
            )
        }

    }
}