import React from 'react';
import './about.css'
import {Link} from "react-router-dom";
const About = () => {
    return (
        <div className={'about-page-wrapper'}>
            <span className={'about-title'}>Jacob Hougaard Bennedsen</span>
            <span className={'about-sub-title'}>Building delightful digital experiences from idea to interfaces</span>
            <div className={'about-content-wrapper'}>
                <div className={'about-image-wrapper'}>
                    <img src={'2024_0409_16580800~2(1).jpg'} style={{maxWidth: "100%"}}/>
                </div>
                <div className={'about-text-wrapper'}>
                    <span className={'about-text'}>
                <span className={'large-text-about'}><b>Hi!</b> I'm Jacob.</span>
                <div className={'about-main-text'}>
                    <span>A product designer and developer who makes a living by turning ideas into interactive designs, and then turn those into interactive, usable and intuitive interfaces.</span>
                    <span>With a strong foundation in front-end development, UX/UI design and prototyping, I am able to bridge the gap between functionality and aesthetics.</span>
                    <span>I belive that every experience can be fun and engaging if it is designed correctly, and even the most trivial task can be made meningful to the user.</span>
                    <Link to={'/projects'}>
                        <div className={'button-primary'}>See my work</div>
                    </Link>
                </div>

                </span>
                </div>

            </div>



        </div>
    );
};

export default About;