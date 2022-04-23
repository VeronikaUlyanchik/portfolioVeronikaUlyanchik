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
                <Title title={"About"}/>
                <div className={style.skills}>

                </div>
            </div>
        </div>
    );
}
