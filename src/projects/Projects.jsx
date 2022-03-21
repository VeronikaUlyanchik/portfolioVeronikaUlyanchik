import React from 'react'
import style from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css';
import {Project} from "./Project/Project";


export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={'TODOLIST'}
                             description={"Lorem ipsum dolor "}/>
                    <Project title={'Social Media'}
                             description={"Lorem ipsum dolor sit amet"}/>
                </div>
            </div>
        </div>
    );
}
