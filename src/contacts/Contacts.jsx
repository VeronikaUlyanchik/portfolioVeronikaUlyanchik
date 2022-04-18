import React from "react";
import style from "./Contacts.module.scss";
import styleContainer from ".././common/styles/Container.module.css"
import {Title} from ".././common/components/title/Title";
import email from "../assets/image/email_black_24dp.svg"
import location from "../assets/image/location_on_black_24dp.svg"
import phone from "../assets/image/phone_iphone_black_24dp.svg"

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.formContainer} ${styleContainer.container}`}>
                <Title title={"GET IN TOUCH"}/>
                <div className={style.shortInfo}>
                    <ul>
                        <li>
                            <div className={style.listInner}>
                                <i className={style.icon}>
                                    <img src={location}/>
                                </i>
                                <div>Minsk, Belarus</div>
                            </div>
                        </li>
                        <li>
                            <div className={style.listInner}>
                                <i className={style.icon}>
                                    <img src={email}/>
                                </i>
                                <div><a href="#">veronikaullll1998@gmail.com</a></div>
                            </div>
                        </li>
                        <li>
                            <div className={style.listInner}>
                                <i className={style.icon}>
                                    <img src={phone}/>
                                </i>
                                <div>+375 29 2263940</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <form action="" className={style.form}>
                    <input type="text" className={style.input}/>
                    <input type="text" className={style.input}/>
                    <textarea  className={style.input} cols={50} rows={8}> </textarea>
                    <button type="submit" className={style.buttonSend}>Send</button>
                </form>
            </div>
        </div>
    )
}