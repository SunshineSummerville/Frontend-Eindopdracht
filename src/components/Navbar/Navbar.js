import React, {useState, useEffect} from "react";
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
import axios from "axios";


function Navbar (props) {
    const [sidebar, setSidebar] = useState(false)
    const [data, setData] = useState('')
    const [error, setError] = useState(false)
    const [users, setUsers] = useState('')

    const showSidebar = () => setSidebar(!sidebar)

    // const data = [{
    //     username: 'test',
    //     password: '123654789',
    //     firstname: 'testobject',
    //     lastname: 'testobjectlastname',
    //     email: 'testemail@test.com',
    //     phonenumber: '01078945612',
    //     street: 'teststreet',
    //     housenumber: '8',
    //     postalcode: '6463GR',
    //     provincie: 'Zuid-Holland'
    //     },
    //     {
    //         username: '2test',
    //         password: '123654789',
    //         firstname: 'testobject',
    //         lastname: 'testobjectlastname',
    //         email: 'testemail@test.com',
    //         phonenumber: '01078945612',
    //         street: 'teststreet',
    //         housenumber: '8',
    //         postalcode: '6463GR',
    //         provincie: 'Zuid-Holland'
    //     },
    //
    // ]

    // const fetchData = async () => {
    //     try {
    //         const data = await axios({
    //             method: 'get',
    //             url: 'http://localhost:8080/api/user',
    //
    //         })
    //         setData(data)
    //         console.log(data)
    //     } catch (error) {
    //         setError(error)
    //         console.log(error)
    //     }
    // }
    // fetchData()

useEffect(() => {
    async function getUserData() {
        setError(false);

        try {
            const result = await axios.get(`http://localhost:8080/api/user `);
            setData(result.data);
            console.log(result.data);
        } catch (e) {
            console.error(e);
            setError(true);
        }

         getUserData();


    }, []);
}


    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className= "navbar">
                <Link to="#" className= 'menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <Searchbar placeholder="search users..." data={data} />
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
                    {SidebarData.map((item, index) => {
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
