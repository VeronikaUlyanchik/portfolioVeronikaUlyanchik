import React, {useEffect} from 'react'
import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css';

export const Main = () => {
    debugger
    let visibleClass = true;

    useEffect(() => {
        const interval = setInterval(() => {
            visibleClass = !visibleClass;
            console.log('cnjfe')
        }, 10000);
        return () => clearInterval(interval);
    });

    return (
        <div className={style.main}>
            <div className={style.greeting}>
                <h3 className={style.name}>Veronika Ulyanchik</h3>
                <span className={style.line}></span>
                <h3 className={style.job}>
                    <span className="cd-headline rotate-1">
                    <span className="blc">Developer</span>
                    <span className={style.wordsWrapper} style={{width: '135.2px'}}>
                    <b className={visibleClass ? style.isVisible :style.isHidden }>Front-end</b>
                    <b className={visibleClass ? style.isHidden :style.isVisible }>React</b>
                    </span>
                    </span>
                </h3>
            </div>
        </div>
    );
}
