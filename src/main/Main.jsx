import React, {useEffect, useState} from 'react'
import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css';

export const Main = () => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(!isVisible)
        }, 1200);
        return () => clearInterval(interval);
    },[isVisible]);

    return (
        <div className={style.main}>
            <div className={style.greeting}>
                <h3 className={style.name}>Veronika Ulyanchik</h3>
                <span className={style.line}></span>
                <h3 className={style.job}>
                    <span className="cd-headline rotate-1">
                    <span className={style.wordsWrapper} style={{width: '135.2px'}}>
                    <b className={isVisible ? style.isVisible :style.isHidden }>Front-end</b>
                    <b className={isVisible ? style.isHidden :style.isVisible }>React</b>
                    </span>
                        <span className="blc">Developer</span>
                    </span>
                </h3>
            </div>
            {/*<div className={style.button}>*/}
            {/*    <a href="/skills">Learn more</a>*/}
            {/*</div>*/}
        </div>
    );
}
