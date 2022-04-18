import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import './App.scss';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {AuthorPhoto} from "./author_photo/AuthorPhoto";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<Main/>*/}
            {/*<Skills/>*/}
            {/*<Projects/>*/}
            {/*<Contacts/>*/}
            <div className="mainContainer">
                <AuthorPhoto/>
                <div className={"routesContainer"}>
                    <Routes>
                        <Route path="" element={<Main/>}/>
                        <Route path="/menu" element={<Main/>}/>
                        <Route path="/skills" element={<Skills/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                    </Routes>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
