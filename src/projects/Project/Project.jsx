import React from 'react'
import style from './Project.module.scss';


export const Project = (props) => {
    return (
        <div className={style.projectBlock}>
            <div style={props.style} className={style.imgContainer}>
                <a className={style.buttonOpen} href={props.href} target={'_blank'} >Open</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <div className={style.description}>
                {props.description}
            </div>
            </div>
        </div>

    );
}