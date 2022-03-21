import React from "react";
import style from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={style.footer}>
            <h3 className={style.title}>Veronika Ulyanchik</h3>
            <div className={style.socialLinksContainer}>
                <div className={style.links}></div>
                <div className={style.links}></div>
                <div className={style.links}></div>
            </div>
            <h2>2022</h2>
        </div>
    )
}