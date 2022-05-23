import React from "react";
import style from "./AuthorPhoto.module.scss";
import styleContainer from ".././common/styles/Container.module.css"
import {Title} from ".././common/components/title/Title";
import my from '../assets/image/myPhoto.jpg';

export const AuthorPhoto = () => {
    const AvatarStyle = {
        backgroundImage: `url(${my})`
    }
    return (
        <div className={style.containerPhoto}>
            <div className={style.authorPhotoBlock} style={AvatarStyle}>
            </div>
        </div>

    )
}