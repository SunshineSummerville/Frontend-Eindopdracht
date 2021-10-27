import React from 'react';

export default function Header (props) { //TODO later items toevoegen aan navbar en deze bestand verwijderen
    return (
        <header className="row block center">
            <div>
                <a href={ "#/"}>
                    <h1>Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">Cart</a> <a href="#signin">SignIn</a>

            </div>
        </header>
    )

}