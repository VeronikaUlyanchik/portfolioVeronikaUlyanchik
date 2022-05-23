import React from 'react'
import style from './About.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import {Title} from ".././common/components/title/Title";
import frameworks from ".././assets/image/code.svg"
import foundation from ".././assets/image/gears-set.svg"
import languages from ".././assets/image/language.svg"
import design from ".././assets/image/pencil.svg"
import testing from ".././assets/image/testing.svg"

export const About = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"About"}/>
                <div className={style.text}>
                    I'm front-end developer experienced in
                    creating SPA using React(TS, JS), Redux.
                    I enhance my web programming skills
                    and acquire new ones by reading articles
                    and books, doing Codewars tasks,
                    creating my own little projects (using
                    different tools), learning from people
                    around me.
                    And also I have interest to learn React
                    Native and other frameworks like Vue.js,
                    Angular.
                    Open for your suggestions
                </div>
            </div>
        </div>
    );
}
