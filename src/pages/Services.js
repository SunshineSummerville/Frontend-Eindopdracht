import React, {useEffect, useState} from 'react'
import axios from "axios";

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

    // const {activeLanguage} = useContext(LanguageContext)
    const [categories, setCategories] = useState([])

    useEffect (()=> {
        async function getCategories() {
            const result = await axios.get("http://localhost:8080/api/categories");

            setCategories(result.data)
            console.log("hai de antwoord van je get request hiero",result.data);
        }

        getCategories()


    },[])

    return (
        <div className= 'services'>
            <h2>Services</h2>
            <div>
                {categories.map((category)=> {
                    console.log(category)
                    return <li>
                        {category.name} - {category.jobDescription}
                    </li>

                })}
            </div>
        </div>
    );


}