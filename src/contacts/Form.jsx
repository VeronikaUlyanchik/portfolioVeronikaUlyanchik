import React from 'react';
import style from "./Contacts.module.scss";

export const Form = () => {
    return (
        <div className={style.formContainer}>
            <form action="" className={style.form}>
                <input type="text" placeholder="Name" className={style.input}/>
                <input type="text" placeholder="Email" className={style.input}/>
                <textarea placeholder="Message" className={style.textarea} cols={50} rows={8}> </textarea>
                <button type="submit" className={style.buttonSend}>Send Message</button>
            </form>
        </div>
    )
}