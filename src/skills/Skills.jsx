import React from 'react'
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";
import {Title} from ".././common/components/title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'t, consectetur adipisicing elit. A, autem, repudian'}/>
                    <Skill title={"CSS"} description={'i nobis optio soluta? Cum dolor eius error nobis quidem reicie'}/>
                    <Skill title={'React'} description={'i nobis optio soluta? Cum dolor eius error nobis quidem reicie'}/>
                </div>
            </div>
        </div>
    );
}