import React, {useState} from 'react';
import style from "./Contacts.module.scss";
import { useFormik } from 'formik';
import axios from 'axios';

export const Form = () => {

    const [sent, setSent] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: values => {
            axios.post("https://smtp-email-nodejs.herokuapp.com/getMessage", {values}).then(()=> {
                setSent(true)
            })

        },
    });
    return (
        <div className={style.formContainer}>
            {sent ? <div className={style.contactText}> Thank you for contact me! </div> :
            <form onSubmit={formik.handleSubmit} className={style.form}>
                <input type="text" placeholder="Name" name="name" onChange={formik.handleChange}
                       value={formik.values.firstName} className={style.input}/>
                <input type="email" placeholder="Email" name="email" onChange={formik.handleChange}
                       value={formik.values.firstName} className={style.input}/>
                <input placeholder="Message" type='textarea' name="message" onChange={formik.handleChange}
                          value={formik.values.firstName}  className={style.textarea} cols={50} rows={8}/>
                <button type="submit" className={style.buttonSend}>Send Message</button>
            </form>}
        </div>
    )
}