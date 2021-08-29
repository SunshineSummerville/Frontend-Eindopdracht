import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import {LanguageContext} from "../context/LanguageContext";


export default function Home(){
    // const {activeLanguage} = useContext(LanguageContext)


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

// <div className= 'home'>
//     <h2>Home</h2>
//
//
// </div>