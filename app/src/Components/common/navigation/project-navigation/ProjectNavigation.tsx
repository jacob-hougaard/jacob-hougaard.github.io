import React from 'react';
import {Link} from "react-router-dom";
import './project-navigation.css'
export interface ProjectNavigationProps {
    projects: ProjectListItem[]
}

export interface ProjectListItem {
    title: string
    url: string
}
const ProjectNavigation = (props: ProjectNavigationProps) => {
    return (
        <div className={'project-navigation-wrapper'}>
            {props.projects.map((p) => {
                return(
                    <Link to={p.url}>
                        <div className={'project-navigation-button'}>{p.title}</div>
                    </Link>
                )
            })}
        </div>
    );
};

export default ProjectNavigation;