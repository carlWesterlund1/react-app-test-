import React from 'react';
import '../App.css';
import './Styling/HeroSection.css';
import newsImage from '../images/img-1.jpg';

function NewsItem({ header, text }) {
    return (
        <div className='news-item'>
            <h1 className='header'>{header}</h1>
            <img
                alt=''
                src={newsImage}
                className='img-layout'
            />
            <p className='text-field'>{text}</p>
        </div>
    )
}

export default NewsItem