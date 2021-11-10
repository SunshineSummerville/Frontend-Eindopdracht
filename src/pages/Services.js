import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom"

//[] Dit component moet iets doen zodra de pagina wordt weergegeven:
//      useEffect gebruik console.log om te zien of het werkt

//[] Data ophalen,
//      async function maken en aanroepen. dan axios , url gebruiken en dan response loggen
//      console.log - binnen de async functie anders krijg je undefined.
//[] Data opslaan
//      State aanmaken en daarvan de setter gebruiken
//[] Data weergeven
//      Return met de JSX {} en .map

export default function Services(){

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({});

    useEffect (()=> {
        async function getCategories() {
            const result = await axios.get("http://localhost:8080/api/categories");

            setCategories(result.data);
        }

        getCategories()


    },[])



    return (
        <div className= 'services'>
            <h2>Services</h2>
            <div>
                {categories.map((category)=> {
                    return <li key={category.id} onClick={()=> setSelectedCategory(category)}>
                        {category.name} - {category.jobDescription}
                    </li>

                })}
            </div>
            <div>
                <h2>{selectedCategory.name}</h2>
                {selectedCategory.handymen?.map((handyman)=>{

                    return <li key={handyman.id}>
                        {handyman.firstname} - {handyman.lastname} <Link to={`/categories/${selectedCategory.id}/handymen/${handyman.id}/reservation`} ><button> Book now</button></Link>
                    </li>
                })}
            </div>
        </div>
    );


}