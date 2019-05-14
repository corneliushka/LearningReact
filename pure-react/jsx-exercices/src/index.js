import React from 'react';
import ReactDOM from 'react-dom';

    function MyThing() {
        return (
            <div>
                <span >
                    <Greeting/>
                </span>

                <div className='book'>
                    <div className='title'>
                        The Title
                    </div>
                    <div className='author'>
                        The Author
                    </div>
                    <ul className='stats'>
                        <li className='rating'>
                            5 stars
                        </li>
                        <li className='isbn'>
                            12-345678-910
                        </li>
                    </ul>
                </div>
                <br/>
            
                <SingleLines/>
                <EmptyNewlines/>
                <SpaceswithNewlines/>
                <SpanMultipleLines/>
            </div>
        );
    }

function Greeting() {
    var username = null;
    return (
        <span>{username ? 'Hello, Corneliu' : 'Not logged In'}</span>
    );
    
}

/* Return the appropriate JSX from this component so that 
when username is undefined or null, it renders “Not logged in”. 
When username is a string, render “Hello, username”. */


function SingleLines() {
    return ( 
        <div>
            Newline
        </div>
    );
}


function EmptyNewlines() {
    return (
        <div>
            Empty 

            Newlines
        
            Here
        </div>
    );
}

function SpaceswithNewlines() {
    return (
        <div>
            &nbsp;Non-breaking
            &nbsp;Spaces&nbsp;
        </div>
    );
}

function SpanMultipleLines() {
    return (
        <div>
            Line1
            {' '}
            Line2
        </div>
    );
}

ReactDOM.render(
    <MyThing/>,
    document.getElementById('root')
);