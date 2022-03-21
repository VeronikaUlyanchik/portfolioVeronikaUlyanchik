import React from "react";
import style from "./Contacts.module.css"

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <h3 className={style.title}>Contacts</h3>
            <div className={style.formContainer}>
                <form action="" className={style.form}>
                    <input type="text" className={style.input}/>
                    <input type="text" className={style.input}/>
                    <textarea cols={50} rows={8}> </textarea>
                </form>
            </div>
            <button className={style.buttonSend}>Send</button>
        </div>
    )
}