import React from "react";
import style from "./Contacts.module.css";
import styleContainer from ".././common/styles/Container.module.css"
import {Title} from ".././common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.formContainer} ${styleContainer.container}`}>
                <Title title={"Contacts"}/>

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