import React from 'react';
import ProjectCard from "../../Components/Cards/ProjectCard";
import './projects.css'
const Projects = () => {
    return (
        <div className={'projects-wrapper'}>
            <ProjectCard imgPath={'/images/seges/Db1.png'} title={'Seges innovation - Danish Boksen'} redirect={'/projects/danish-boksen'} content={<div>Handle all of your certifications in one place</div>}></ProjectCard>
            <ProjectCard imgPath={'/images/seges/IC1.png'} title={'Seges innovation - Intercount'} redirect={'/projects/intercount'} content={<div>Digital ERP system for the danish agriculture sector</div>}></ProjectCard>
            <ProjectCard imgPath={'/images/smukfest/smuk1.png'} title={'Skanderborg festival - official app'} redirect={'/projects/smukfest'} content={<div>From 2023 to 2024 i worked on the project for smukfest</div>}></ProjectCard>
            <ProjectCard imgPath={'/images/aryze/Mama1.png'} title={'Aryze - Mama'} redirect={'/projects/smukfest'} content={<div>From 2023 to 2024 i worked on the project for smukfest</div>}></ProjectCard>

        </div>
    );
};

export default Projects;