import React from 'react';
import {useState, useEffect} from 'react';
import axios from "axios";

export default function Searchbar({ placeholder, data }) {
    // const [query, setQuery] = useState('');
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [filteredUser, setFilteredUser] = useState([]);
    // const [error, setError] = useState(false)
    //
    //
    // useEffect(() => {
    //     async function getUserData() {
    //         setError(false);
    //
    //         try {
    //             const result = await axios.get(`http://localhost:8080/api/user `);
    //             setUsers(result.data);
    //             console.log(result.data);
    //         } catch (e) {
    //             console.error(e);
    //             setError(true);
    //         }
    //     }
    //     if (users) {
    //         getUserData();
    //     }
    //
    // }, [users]);

    // link = http://localhost:8080/api/handyman/{postalcode}
    // link: vind alle handymans http://localhost:8080/api/user --> hierop moet gefilterd worden bij de searchbar filter alle handymans.

    // useEffect(() => {
    //     async function getUserData() {
    //         const result = await axios.get("http://localhost:8080/api/user");
    //         console.log(result.data);
    //     }
    //
    //     getUserData()
    //
    // }, []);

    //console.log("Hier zit de gebruikers data in:", getUserData)


    // function forceLower (searchTerm) {
    //     searchTerm.value=searchTerm.value.toLowerCase();
    // }

    //
    // useEffect(() => {
    //     setLoading(true);
    //     axios.get("http://localhost:8080/api/user")
    //         .then((res) => {
    //             setUsers(res.data);
    //             setLoading(false);
    //             console.log(users)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //     users();
    // }, []);
    //
    // useEffect(() => {
    //     setFilteredUser(
    //         users.filter((user) =>
    //             user.firstname.toLowerCase().includes(search.toLowerCase())
    //         )
    //     );
    // }, [search, users]);

    // const handleClick = () => {
    //     setLocationHandler(query);
    //
    //     console.log("you clicked on the button");
    // };
    //
    // const keyPressCheck = (e) => {
    //     if (e.keyCode === 13) {
    //         setLocationHandler(query)
    //     }
    //
    // };

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.username.toLowerCase().includes(searchWord.toLowerCase());

        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }

        console.log(newFilter)
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };



    // return (
    //     <div className="Searchbar">
    //         <input
    //             type="text"
    //             placeholder="search users..."
    //             onChange={(e) => setQuery(e.target.value)}
    //             onKeyUp={keyPressCheck}
    //
    //         />
    //
    //         <button type="button"
    //                 onClick={handleClick}
    //         >
    //             Zoek
    //         </button>
    //
    //         {filteredUser.map((user, idx) => (
    //             <userDetail key={idx} {...user}/>
    //
    //         ))}
    //     </div>
    // );

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                {/*<div className="searchIcon">*/}
                {/*    {filteredData.length === 0 ? (*/}
                {/*        <SearchIcon />*/}
                {/*    ) : (*/}
                {/*        <CloseIcon id="clearBtn" onClick={clearInput} />*/}
                {/*    )}*/}
                {/*</div>*/}
            </div>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <a className="dataItem" href={value.link} target="_blank">
                                <p>{value.title} </p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );

}

