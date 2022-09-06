import React from 'react';
import '../App.css';
import { Button } from './Button';
import NewsItem from './NewsItem';
import './Styling/HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>ADVENTURE AWAITS</h1>
            <p>what are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    endPoint='/beginners'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    endPoint='/'
                >
                    WATCH TRAILER <i className='far
                    fa-play-circle' />
                </Button>
            </div>
            <NewsItem
                className='news-item'
                header='Training starts'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor nulla, dapibus in rhoncus at,
                tincidunt et lectus. Donec cursus mollis lacinia. Pellentesque ut nisi ultrices, congue diam non,
                ornare augue. Donec scelerisque luctus rutrum. Aenean ex nulla, vulputate quis vulputate nec, semper
                vel mi. Etiam posuere eleifend dictum. Donec eu diam et ipsum tempor vehicula. Quisque vel nisi at metus dictum consectetur.
                Mauris eu justo non turpis accumsan tempus a et quam. Suspendisse et iaculis risus. Sed ac mattis nisi. Vivamus ut purus nisi'
            />
            <NewsItem
                header='Autumn meeting'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor nulla, dapibus in rhoncus at,
                tincidunt et lectus. Donec cursus mollis lacinia. Pellentesque ut nisi ultrices, congue diam non,
                ornare augue. Donec scelerisque luctus rutrum. Aenean ex nulla, vulputate quis vulputate nec, semper
                vel mi. Etiam posuere eleifend dictum. Donec eu diam et ipsum tempor vehicula. Quisque vel nisi at metus dictum consectetur.
                Mauris eu justo non turpis accumsan tempus a et quam. Suspendisse et iaculis risus. Sed ac mattis nisi. Vivamus ut purus nisi'
            />
        </div>
    );
}

export default HeroSection