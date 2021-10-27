import React from 'react';
import {useState, useEffect} from 'react';
import axios from "axios";

export default function Searchbar(props) {
    const [query, setQuery] = useState('')
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredUser, setFilteredUser] = useState([]);
    const [error, setError] = useState(false);
    const [currentUser, setCurrentUser] = useState('');

    // link = http://localhost:8080/api/handyman/{postalcode}
    // link: vind alle handymans http://localhost:8080/api/user --> hierop moet gefilterd worden bij de searchbar filter alle handymans.

    const handleClick = () => {
        // props.setUserHandler(query);

        console.log("you clicked on the button");
    };

    const keyPressCheck = (e) => {
        if (e.keyCode === 13) {

            // props.setUserHandler(query)
        }

    };

    useEffect(() => {


        // console.log(users)
        async function fetchData() {
            setError(false);

            try {
                const result = await axios.get(`http://localhost:8080/api/user`);
                setUsers(result.data);
                console.log(result.data);
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }
        if (query) {
            fetchData();
        }


    }, [query]);

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


    // useEffect(() => {
    //     setLoading(true);
    //     axios.get("http://localhost:8080/api/user")
    //         .then((res) => {
    //             setUsers(res.data);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);
    //
    // useEffect(() => {
    //     setFilteredUser(
    //         users.filter((user) =>
    //             user.firstname.toLowerCase().includes(query.toLowerCase())
    //         )
    //     );
    // }, [query, users]);


    return (
        <div className="Searchbar">
            <input
                type="text"
                name="search"
                value={query}
                placeholder="search users..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={keyPressCheck}
            />

            <button type="button"
                    onClick={handleClick}
            >
                Zoek
            </button>

            {filteredUser.map((user, idx) => (
                <userDetail key={idx} {...user}/>

            ))}
        </div>

    );
}

