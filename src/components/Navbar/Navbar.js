import React, {useState, useContext} from "react";
import * as FaIcons from "react-icons/fa"; /* FA Font Awesome icons*/
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import {SidebarData} from "./SidebarData";
import "./Navbar.css";
import {IconContext} from "react-icons";
import Searchbar from "../Searchbar/Searchbar";
import Header from "../ShoppingCart/Header";
import Basket from "../ShoppingCart/Basket";
import Main from "../ShoppingCart/Main";
import {AuthContext} from "../../context/AuthContext";

function Navbar (props) {
    const [sidebar, setSidebar] = useState(false);
    const {authState} = useContext (AuthContext);
    console.log("AUTH IN NAVBAR",authState)



    const showSidebar = () => setSidebar(!sidebar)



    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className= "navbar">
                <Link to="#" className= 'menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <Searchbar  />
                <Header></Header>
                <div className="row">
                    <Main></Main>
                    <Basket></Basket>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu space active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>

                    {SidebarData.filter((item) => {
                        console.log("SHOW WHEN NOT LOGGED IN",item.notLoggedIn,"SHOW WHEN LOGGED IN",item.loggedIn, " LOGGED IN NOW?",authState.user !== null, "RESULT",item.notLoggedIn === (authState.user === null) || item.loggedIn === (authState.user !== null) )

                        return item.notLoggedIn === (authState.user === null) || item.loggedIn === (authState.user !== null)
                    }).map((item, index) => {

                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )


                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
