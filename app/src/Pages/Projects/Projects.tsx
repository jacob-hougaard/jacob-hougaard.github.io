import React from 'react';
import ProjectCard from "../../Components/Cards/ProjectCard";
import './projects.css'
const Projects = () => {
    return (
        <div className={'projects'}>
            <div className={'projects-wrapper'}>
                <ProjectCard imgPath={'/images/seges/Db1.png'} title={'Seges innovation - Danish Boksen'} redirect={'/projects/Danish-Boksen'} content={<div>Handle all of your certifications in one place</div>}></ProjectCard>
                <ProjectCard imgPath={'/images/seges/IC1.png'} title={'Seges innovation - Intercount'} redirect={'/projects/Intercount'} content={<div>Digital ERP system for the danish agriculture sector</div>}></ProjectCard>
                <ProjectCard imgPath={'/images/smukfest/smuk1.png'} title={'Skanderborg festival - official app'} redirect={'/projects/Smukfest'} content={<div>From 2023 to 2024 i worked on the project for smukfest</div>}></ProjectCard>
                {/* <ProjectCard imgPath={'/images/aryze/Mama1.png'} title={'Aryze - Mama'} redirect={'/projects/Mama'} content={<div>Aryze's platform for digital cash</div>}></ProjectCard> */}
                <ProjectCard imgPath={'/images/muni/Muni1.png'} title={'Den digitale hotline - Muni'} redirect={'/projects/Muni'} content={<div>Muni, the municipal chatbot</div>}></ProjectCard>
                <ProjectCard imgPath={'/images/other/IBM/M&A.png'} title={'M&A procurement platform'} redirect={'/projects/MandA'} content={<div>Muni, the municipal chatbot</div>}></ProjectCard>
                <ProjectCard imgPath={'/images/other/IBM/Attrition.png'} title={'Attrition analysis platform'} redirect={'/projects/Attrition'} content={<div>Muni, the municipal chatbot</div>}></ProjectCard>

            </div>
        </div>
    );
};

export default Projects;