import React from 'react'
import style from './Projects.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import {Project} from './Project/Project';
import {Title} from '.././common/components/title/Title';
import social from '../assets/image/social.png'
import todos from '../assets/image/todos.jpg'

export const Projects = () => {
    const TDStyle = {
        backgroundImage: `url(${todos})`
    }
    const SMStyle = {
        backgroundImage: `url(${social})`
    }
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.projects}>
                    <Project style={TDStyle} title={'TODOLIST'}
                             description={"Lorem ipsum dolor "}/>
                    <Project style={SMStyle} title={'Social Media'}
                             description={"Lorem ipsum dolor sit amet"}/>
                </div>
            </div>
        </div>
    );
}
