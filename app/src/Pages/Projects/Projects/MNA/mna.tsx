import React from 'react';
import './mna.css'
const Mna = () => {
    return (
        <div className={'project-wrapper'}>
            <div className={'project-content'}>
                <h1>M&A collaboration tool</h1>

                <span><b>Company:</b> Does not want to be mentioned</span>
                <span><b>Role:</b> Frontend Developer</span>
                <h2>About the project</h2>
                <span>
                    When working with merger and acquisition, there are a lot of documents that has to be read by a lot of people. This introduces human error, but also the risk that some documents might be read multiple times by different people.
                </span>
                <span>
                    To combat this, the people working on the merger has to have strong collaboration and be able to keep track of the back and forth between the buyer and the seller of the company.
                </span>

                <h2>Outcomes</h2>
                <span>
                    To assist the people working on the M&A process, an application was built that allows the buyer side to collaborate on different documents, leave comments and tag documents with risks.
                </span>
                <span> An AI was also added to detect risks in documents and flag these to the users.</span>
                <div className={'project-product-images'}>
                    <img src={'/images/other/IBM/M&A.png'}/>
                    <img src={'/images/other/IBM/M&A2.png'}/>
                </div>
                <span></span>
            </div>
        </div>
    );
};

export default Mna;