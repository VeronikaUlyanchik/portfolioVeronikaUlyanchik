import React from 'react';
import style from './Title.module.scss'

export const Title = ({title}) => {
    return (
        <div className={style.title}>
            <h2>{title}</h2>
        </div>
    );
};

