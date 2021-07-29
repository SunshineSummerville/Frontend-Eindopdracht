import React from 'react';
import {useState, useEffect} from 'react';
import axios from "axios";

export default function Searchbar(props) {
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredUser, setFilteredUser] = useState([]);

    // link = http://localhost:8080/api/handyman/{postalcode}
    // link: vind alle handymans http://localhost:8080/api/user --> hierop moet gefilterd worden bij de searchbar filter alle handymans.

    // useEffect(() => {
    //     async function getUserData() {
    //         const result = await axios.get("http://localhost:8080/api/user");
    //         setUser(result.data);
    //     }
    //
    //     getUserData()
    //
    // }, []);

    //console.log("Hier zit de gebruikers data in:", getUserData)


    // function forceLower (searchTerm) {
    //     searchTerm.value=searchTerm.value.toLowerCase();
    // }


    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:8080/api/user")
            .then((res) => {
                setUsers(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        setFilteredUser(
            users.filter((user) =>
                user.firstname.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, users]);


    return (
        <div className="Searchbar">
            <input
                type="text"
                placeholder="search users..."
                onChange={(e) => setSearch(e.target.value)}
            />
            {filteredUser.map((user, idx) => (
                <userDetail key={idx} {...user}/>

            ))}
        </div>
    );
}

