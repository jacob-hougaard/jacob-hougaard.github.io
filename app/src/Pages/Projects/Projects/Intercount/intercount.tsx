import React from 'react';
import './intercount.css'

const Intercount = () => {
    return (
        <div className={'project-wrapper'}>
            <div className={'project-content'}>
                <h1>Intercount</h1>

                <span><b>Company:</b> Seges innovation</span>
                <span><b>Role</b>: UX Engineer</span>
                <h2>About the project</h2>
                <span>
                    Intercount is a enterprice resource planning system, made specifically for danish businesses to keep track of their economics.
                    The system is built on top of an older system, designed for the danish agriculture sector, but has now been revamped to accommodate all types of businesses.
                </span>
                <span>
                </span>

                <h2>Outcomes</h2>
                <span>With the experience of handling the economics of the agriculture sector for many years, the people at Seges had the right connections to gain insights into how a product could be built</span>
                <span>A application was built on the existing backend system (with some extentions), and a responsive web application was created, with complex flows and systems to accomodate specific needs of the users.</span>
                <span className={'project-product-images'}>
                    <img src={'/images/seges/IC2.png'}/>
                </span>
                <span></span>
            </div>
        </div>
    );
};

export default Intercount;