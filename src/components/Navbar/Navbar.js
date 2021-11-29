import React, {useState, useContext} from "react";
import * as FaIcons from "react-icons/fa"; /* FA Font Awesome icons*/
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import {SidebarData} from "./SidebarData";
import "./Navbar.css";
import {IconContext} from "react-icons";
import {AuthContext} from "../../context/AuthContext";

function Navbar(props) {
    const [sidebar, setSidebar] = useState(false);
    const {authState, logout} = useContext(AuthContext);
    const showSidebar = () => setSidebar(!sidebar);


    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <menu className="navbar">
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>

                    <button onClick={logout}> Logout</button>
                </menu>
                <nav className={sidebar ? 'nav-menu space active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>

                        {SidebarData.filter((item) => {
                            return item.notLoggedIn === (authState.user === null) || item.loggedIn === (authState.user !== null);
                        }).map((item, index) => {

                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );


                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
