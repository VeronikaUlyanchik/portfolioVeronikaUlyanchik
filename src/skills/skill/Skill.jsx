import React from 'react'
import style from './Skill.module.scss';


export const Skill = (props) => {
    return (
        <div className={style.skillBlock}>
                <div className={style.icon} >
                    <div style={props.style}></div>
                </div>
            <h3>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
            </div>

    );
}