import React from 'react';
import ProjectCard from "../../Components/Cards/ProjectCard";
import './projects2.css'
import {Link} from "react-router-dom";
const Projects2 = () => {
    return (
        <div className={'projects2'}>
            <div className={'projects2-wrapper'}>
                <h1>Projects:</h1>
                <span className={'projects2-description'}>These are a showcase of some of the projects that i have worked on. Here you will find a combination of both development and design. Be aware that some of the projects are either under NDA or the client cannot be disclosed</span>
                <Link to={'/projects/Danish-Boksen'}><div className={'project2-list-item'}><span>Seges innovation - Danish Boksen </span><img style={{width:"20px"}} src={'Arrow.svg'}/></div></Link>
                <Link to={'/projects/Intercount'}><div className={'project2-list-item'}><span>Seges innovation - Intercount </span><img style={{width:"20px"}} src={'Arrow.svg'}/></div></Link>
                <Link to={'/projects/Smukfest'}><div className={'project2-list-item'}><span>Skanderborg festival - official app </span><img style={{width:"20px"}} src={'Arrow.svg'}/></div></Link>
                <Link to={'/projects/Muni'}><div className={'project2-list-item'}><span>Den digitale hotline - Muni </span><img style={{width:"20px"}} src={'Arrow.svg'}/></div></Link>
                <Link to={'/projects/MandA'}><div className={'project2-list-item'}><span>M&A procurement platform </span><img style={{width:"20px"}} src={'Arrow.svg'}/></div></Link>
                <Link to={'/projects/Attrition'}><div className={'project2-list-item'}><span>Attrition analysis platform </span><img style={{width:"20px"}} src={'Arrow.svg'}/></div></Link>
            </div>
        </div>
    );
};

export default Projects2;