
import React from 'react';
import {useState,useEffect} from 'react';
import axios from "axios";

function Searchbar () {
    const [searchTerm, setSearchTerm] = useState('')
    const [user,setUser] = useState();


    // link = http://localhost:8080/api/handyman/{postalcode}
    // link: vind alle handymans http://localhost:8080/api/user --> hierop moet gefilterd worden bij de searchbar filter alle handymans.

    useEffect(() => {
        async function getUserData() {
            const result = await axios.get ("http://localhost:8080/api/user");
            setUser(result.data);
        }

        getUserData();
    },[]);



    // function forceLower (searchTerm) {
    //     searchTerm.value=searchTerm.value.toLowerCase();
    // }


    return (
        <div className= "Searchbar">
            <input type= "text" placeholder= "Search..."  onChange={event => {setSearchTerm(event.target.value)}}/>


        </div>
    );
}

export default Searchbar