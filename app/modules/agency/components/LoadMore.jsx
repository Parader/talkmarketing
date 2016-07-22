import React from 'react';
import ReactDOM from 'react-dom';

export default class LoadMore extends React.Component{

    render() {
        return(
            <div className='loadMore fadefx'>
                <button onClick={this.props.loadMore}>Load more <svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg></button>
            </div>
        )
    }
}