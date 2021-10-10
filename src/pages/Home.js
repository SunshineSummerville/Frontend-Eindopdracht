import React, {useEffect, useState, useContext} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
import {LanguageContext} from "../context/LanguageContext";
import {get} from "react-hook-form";

//[] Dit component moet iets doen zodra de pagina wordt weergegeven:
//      useEffect gebruik console.log om te zien of het werkt

//[] Data ophalen,
//      async function maken en aanroepen. dan axios , url gebruiken en dan response loggen
//      console.log - binnen de async functie anders krijg je undefined.
//[] Data opslaan
//      State aanmaken en daarvan de setter gebruiken
//[] Data weergeven
//      Return met de JSX {} en .map

export default function Home(){




    return (
        <div>
            <div className="page-container">
                {/*<h2> {content[activeLanguage].home.title} </h2>*/}
                {/*<p> {content[activeLanguage].home.introText} </p>*/}
            </div>
            <div className="row">
                <div className="column">
                    <div className="container">
                        {/*<img alt="handyman" className="img"/>*/} @TODO Plaatje toevoegen
                        <div className="transition1">
                            <Link to="/HandymanSignup">
                                <button className="button-text">Handyman</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="container">
                        {/*<img  alt="customer" className="img"/>*/} @TODO Plaatje toevoegen
                        <div className="transition2">
                            <Link to="/signup">
                                <div className="button-text" >Customer</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )



}

