import React from "react";
import style from "./Footer.module.scss";
import telegram from '../assets/image/telegram.svg';
import linkedin from '../assets/image/linkedin.svg';


export const Footer = () => {
    const telegramStyle = {
        backgroundImage: `url(${telegram})`
    }
    const linkedinStyle = {
        backgroundImage: `url(${linkedin})`
    }
    return (
        <div className={style.footer}>
            <p className={style.title}>Copyright @ 2022</p>
            <div className={style.socialLinksContainer}>
                <div className={style.links} style={telegramStyle} >
                    <a href="#"></a>
                </div>
                <div className={style.links} style={linkedinStyle}>
                    <a href="#"></a>
                </div>

            </div>
        </div>
    )
}