import React, { useState } from 'react';
import '../App.css';
import './Styling/HeroSection.css';
import newsImage from '../images/img-1.jpg';

function NewsItem({ header, text }) {

    const textSnippet = text.slice(0, 100);
    const [showEntireText, setShowEntireText] = useState(false);
    const showMore = () => setShowEntireText(true);
    const showLess = () => setShowEntireText(false);

    return (
        <div className='news-item'>
            <h1 className='header'>{header}</h1>
            <img
                alt=''
                src={newsImage}
                className='img-layout'
            />
            {showEntireText && <div><p className='text-field'>{text}</p>
                <h2 className='news-show-link' onClick={showLess}>SHOW LESS</h2>
            </div>}
            {!showEntireText && <div> <p className='text-field'>{textSnippet}</p>
                <h2 className='news-show-link' onClick={showMore}>SHOW MORE</h2>
            </div>}
        </div>
    )
}

export default NewsItem