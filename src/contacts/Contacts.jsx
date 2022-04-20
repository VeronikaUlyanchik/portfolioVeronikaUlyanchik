import React from "react";
import style from "./Contacts.module.scss";
import {ContactsFields} from "./ContactsFields";
import {Form} from "./Form";
import styleContainer from "../common/styles/Container.module.css";
import {Title} from ".././common/components/title/Title";
import email from "../assets/image/email_black_24dp.svg";
import location from "../assets/image/location_on_black_24dp.svg";
import phone from "../assets/image/phone_iphone_black_24dp.svg";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.container} ${styleContainer.container}`}>
                <Title title={"GET IN TOUCH"}/>
                <div className={style.shortInfo}>
                    <ul>
                        <ContactsFields src={location} text={"Minsk, Belarus"}/>
                        <ContactsFields src={email} text={"veronikaullll1998@gmail.com"}/>
                        <ContactsFields src={phone} text={"+375 29 2263940"}/>
                    </ul>
                </div>
                <Form />
            </div>
        </div>
    )
}