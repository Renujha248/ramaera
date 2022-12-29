import React from 'react'
import CardContent from './CardContent'
import Summary from './Summary'

const Container = () => {
    return (
        <div className='container-bg'>
            <Summary />
            <CardContent />
            <span className='polygon-icon drop-shadow-xl'>
                <svg width="100%">
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="13%" style={{ "stop-color": "#FF7917" }}></stop>
                        <stop offset="100%" style={{ "stop-color": "#FFDD2D" }}></stop>
                    </linearGradient>
                    <polygon class="hex" points="300,150 225,280 75,280 0,150 75,20 225,20" fill="url(#grad1)" stroke="yellowq"></polygon>
                </svg>
            </span>
        </div>
    )
}

export default Container