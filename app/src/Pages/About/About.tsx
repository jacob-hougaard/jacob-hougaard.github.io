import React from 'react';
import './about.css'
const About = () => {
    return (
        <div className={'about-page-wrapper'}>
            <span className={'about-title'}>Jacob Hougaard Bennedsen</span>
            <span className={'about-sub-title'}>Product designer and developer</span>
            <span className={'about-text'}>
                <span><b>Hi!</b> I'm Jacob.</span>
                <span>A product designer and developer who makes a living by turning ideas into interactive designs, and then turn those into interactive, usable and intuitive interfaces.</span>
                <span>With a strong foundation in front-end development, UX/UI design and prototyping, I am able to bridge the gap between functionality and aesthetics.</span>
                <span>I belive hat every experience can be fun and engaging if it is designed correctly, and even the most trivial task can be made meningful to the user</span>
            </span>
        </div>
    );
};

export default About;