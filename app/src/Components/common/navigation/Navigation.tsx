import React from 'react';
import './Navigation.css';
import {Link} from "react-router-dom";
const Navigation = () => {
    return (
        <div className={'nav-bar'}>
            <div className={'nav-bar-items'}>
                <div className={'nav-bar-item'}>
                    <Link to={'/'}>Who am i?</Link>
                </div>
                <div className={'nav-bar-item'}>
                    <Link to={'/projects'}>What have i done?</Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;