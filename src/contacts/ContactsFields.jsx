import React from 'react';
import style from "./Contacts.module.scss";

export const ContactsFields = ({src, text, ...props}) => {
    return (
        <li>
            <div className={style.listInner}>
                <i className={style.icon}>
                    <img src={src}/>
                </i>
                <div>{text}</div>
            </div>
        </li>
    )
}