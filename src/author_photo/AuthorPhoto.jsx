import React from "react";
import style from "./AuthorPhoto.module.scss";
import styleContainer from ".././common/styles/Container.module.css"
import {Title} from ".././common/components/title/Title";
import fake from '../assets/image/fake.jpg';

export const AuthorPhoto = () => {
    const AvatarStyle = {
        backgroundImage: `url(${fake})`
    }
    return (
        <div className={style.authorPhotoBlock} style={AvatarStyle}>

        </div>
    )
}