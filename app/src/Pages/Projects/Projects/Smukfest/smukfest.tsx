import React from 'react';

const Smukfest = () => {
    return (
        <div className={'project-wrapper'}>
            <div className={'project-content'}>
                <h1>Smukfest Official App</h1>

                <span><b>Company:</b> Skanderborg Festival</span>
                <span><b>Role:</b> Product designer</span>
                <h2>About the project</h2>
                <span>
                    Every year, over 60,000 people gather in Skanderborg to celebrate Smukfest.
                    With so many participants, it is important to have an app that shows what you can do at the festival, when the next band is playing, facilities and what you can drink and eat.
                </span>
                <span>
                    In 2023, Skanderborg Festival moved away from outsourcing their app, and decided to develop it in-house.
                    This meant that a new app had to be developed from scratch, with a new code base and new user interactions.
                </span>

                <h2>Outcomes</h2>
                <span>
                    Along with the stakeholders at Skanderborg festival, a team of developers and project managers, i, along with the team managed to create an application that had the functionalities of the original application.
                    The application was able to be modified and encompass the special needs of Skanderborg festival and its participants
                </span>
                <div className={'project-product-images'}>
                    <img src={'/images/smukfest/smuk2.png'}/>
                    <img src={'/images/smukfest/smuk3.png'}/>
                </div>

                <span></span>
            </div>
        </div>
    );
};

export default Smukfest;