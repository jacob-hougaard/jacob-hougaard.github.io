import React from 'react';
import './about.css'
import {Link} from "react-router-dom";
const About = () => {
    return (
        <div className={'about-page-wrapper'}>
            <img src={'2024_0409_16580800~2(1).jpg'} style={{maxWidth: 400}}/>
            <span className={'about-title'}>Jacob Hougaard Bennedsen</span>
            <span className={'about-sub-title'}>Product designer and developer</span>
            <span className={'about-text'}>
                <span><b>Hi!</b> I'm Jacob.</span>
                <span>A product designer and developer who makes a living by turning ideas into interactive designs, and then turn those into interactive, usable and intuitive interfaces.</span>
                <span>With a <b><Link to={"/projects2"}>strong</Link></b> foundation in front-end development, UX/UI design and prototyping, I am able to bridge the gap between functionality and aesthetics.</span>
                <span>I belive hat every experience can be fun and engaging if it is designed correctly, and even the most trivial task can be made meningful to the user.</span>
            </span>
        </div>
    );
};

export default About;