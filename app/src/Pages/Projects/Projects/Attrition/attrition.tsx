import React from 'react';
import './attrition.css'
const Attrition = () => {
    return (
        <div className={'project-wrapper'}>
            <div className={'project-content'}>
                <h1>Attrition analysis tool</h1>

                <span><b>Company:</b> Does not want to be mentioned</span>
                <span><b>Role</b>: Product designer</span>
                <h2>About the project</h2>
                <span>
                    Something that every company experiences is employee turnover. High attrition can be expensive and lead to lower team morale and trying to address these issues can be both expensive and take a lot of time.
                </span>
                <span>
                    But there is also a huge benefit to addressing these issues, and not having some kind of analysis, could cost the company more than a solid worker.
                </span>

                <h2>Outcomes</h2>
                <span>In order to automate attrition analysis, a machine learning model was trained to discover trends for employees leaving across the workforce.</span>
                <span>And to interact with these trends, an application was designed and built.</span>
                <span className={'project-product-images'}>
                    <img src={'/images/other/IBM/Attrition.png'}/>
                </span>
                <span></span>
            </div>
        </div>
    );
};

export default Attrition;