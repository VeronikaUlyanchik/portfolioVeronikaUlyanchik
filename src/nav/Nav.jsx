import React from 'react'
import style from './Nav.module.scss';
import { NavLink } from "react-router-dom";

export const Nav = () => {

    return (
        <div className={style.nav}>
            <NavLink to="/menu" className={({isActive})=> isActive ? style.activeLink : style.link}>Main</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive ? style.activeLink : style.link}>About</NavLink>
            <NavLink to="/skills" className={({isActive})=> isActive ? style.activeLink : style.link}>Skills</NavLink>
            <NavLink to="/projects" className={({isActive})=> isActive ? style.activeLink : style.link}>Projects</NavLink>
            <NavLink to="/contacts" className={({isActive})=> isActive ? style.activeLink : style.link}>Contacts</NavLink>


        </div>
    );
}
