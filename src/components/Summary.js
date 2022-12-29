import React from 'react'

const Summary = () => {
    return (
        <div className='summary'>
            <span className='polygon-icon'>
                <svg width="100%" height="500"><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="13%" style={{"stop-color": "#FF7917"}}></stop><stop offset="100%" style={{"stop-color":"#FFDD2D"}}></stop></linearGradient><polygon class="hex" points="300,150 225,280 75,280 0,150 75,20 225,20" fill="url(#grad1)"></polygon></svg>
            </span>
            <h1 className='heading'>
                The Ramaera Expansion
            </h1>
            <p className='content'>
                We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain including IT.
            </p>
        </div>
    )
}

export default Summary