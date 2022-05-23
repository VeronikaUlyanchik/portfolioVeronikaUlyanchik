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
                    <a href="https://www.linkedin.com/in/veronika-ulyanchik1998/" target={'_blank'}></a>
                </div>
                <div className={style.links} style={linkedinStyle}>
                    <a href="https://t.me/VeronikaUlyanchik" target={'_blank'}></a>
                </div>
            </div>
        </div>
    )
}