import React from 'react'
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";
import {Title} from ".././common/components/title/Title";
import frameworks from ".././assets/image/code.svg"
import foundation from ".././assets/image/gears-set.svg"
import languages from ".././assets/image/language.svg"
import design from ".././assets/image/pencil.svg"
import testing from ".././assets/image/testing.svg"

export const Skills = () => {
    const styles = {
        development: {backgroundImage: `url(${frameworks})`},
        foundation: { backgroundImage: `url(${foundation})`},
        languages: { backgroundImage: `url(${languages})`},
        design: { backgroundImage: `url(${design})`},
        testing: { backgroundImage: `url(${testing})`},
    };

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={'Foundation'} description={'JavaScript, TypeScript, HTML5, CSS3'} style={styles.foundation}/>
                    <Skill title={"Development"} description={'React, Redux, AXIOS, Redux-Thunk, Formik, GIT etc.'} style={styles.development}/>
                    <Skill title={"Testing"} description={'Unit Tests, SnapShot, Storybook'} style={styles.testing}/>
                    <Skill title={"Design"} description={'Material UI, SCSS'} style={styles.design}/>
                    <Skill title={'Languages'} description={'Russian- native , English - intermediate(B1) (in progress)'} style={styles.languages}/>
                </div>
            </div>
        </div>
    );
}
