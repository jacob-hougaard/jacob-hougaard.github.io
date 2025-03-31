import React from 'react';

const Muni = () => {
    return (
        <div className={'project-wrapper'}>
            <div className={'project-content'}>
                <h1>Muni</h1>

                <span>Company: Den Digitale Hotline</span>
                <span>Role: Frontend Developer</span>
                <h2>About the project</h2>
                <span>
                    The danish municipalities each have their own way of handling specific issues. Things like opening hours, what to do about garbarge, or where to go when ordering a new passport can vary from municipality to municipality.
                    All of this documentation is written down in documents, but how do they help users find it?
                </span>
                <span>
                    In comes Muni, the chatbot for the municipalities, each chatbot has the ability to show the same interface and interactions. while letting the municipalites customize answers and look of the chatbot however they please.
                </span>

                <h2>Outcomes</h2>
                <span>
                    To help the municipalities, a chatbot was developed that used the same look and feel for each municipality, but behind the scenes they were able to feed it with custom information and upload stylesheets to make it their own.
                </span>
                <span>In 2022, Muni won the danish "digitaliseringsprisen" in the catergory of innovation.</span>
                <div className={'project-product-images'}>
                    <img src={'/images/muni/Muni2.png'}/>
                    <img src={'/images/muni/Muni3.png'}/>
                </div>
                <span></span>
            </div>
        </div>
    );
};

export default Muni;