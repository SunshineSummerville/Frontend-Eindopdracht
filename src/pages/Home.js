import React, {useEffect, useState, useContext} from 'react'
import {Link} from "react-router-dom";


export default function Home(){


    return (
        <div>
            <div className="page-container">
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
    );



}

