import React from 'react'
import style from './Projects.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import {Project} from './Project/Project';
import {Title} from '.././common/components/title/Title';
import social from '../assets/image/social.png'
import todos from '../assets/image/todos.jpg'
import cards from '../assets/image/learnings.jpg'

export const Projects = () => {
    const TDStyle = {
        backgroundImage: `url(${todos})`
    }
    const SMStyle = {
        backgroundImage: `url(${social})`
    }
    const CardsStyle = {
        backgroundImage: `url(${cards})`
    }
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.projects}>
                    <Project style={CardsStyle} title={'Learning Cards'} href={'https://github.com/VeronikaUlyanchik/cardsproject'}
                             description={"Created app using React/TypeScript/Redux/ " +
                                 "ReduxThunk/Axios/Formik/MaterialUI/Unit tests/Storybook."}/>
                    <Project style={SMStyle} title={'Social Media'} href={'https://github.com/VeronikaUlyanchik/social-media/tree/main/my-app'}
                             description={"Created app using React/TypeScript/Redux/\n" +
                                 "ReduxThunk/Axios/Formik /MaterialUI."}/>
                    <Project style={TDStyle} title={'TODOLIST'} href={'https://github.com/VeronikaUlyanchik/todolist_version2'}
                             description={"Created app using React/TypeScript/Redux/\n" +
                                 "ReduxThunk/Axios/Formik/MaterialUI/Unit\n" +
                                 "tests/Storybook. "}/>
                </div>
            </div>
        </div>
    );
}
