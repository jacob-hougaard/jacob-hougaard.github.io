import React, {ReactNode} from 'react';
import './project-card.css'
import {Link} from "react-router-dom";
interface ProjectCardProps {
    imgPath: string;
    title: string;
    content: ReactNode;
    redirect: string;
}
const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Link to={props.redirect}>
        <div className={'project-card-wrapper'}>
            <img className={'project-card-image'} src={props.imgPath}></img>
            <span className={'project-card-title'}>{props.title}</span>
            <span className={'project-card-description'}>
                {props.content}
            </span>
        </div>
        </Link>
    );
};

export default ProjectCard;