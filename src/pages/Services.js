import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom"
import CategoryItem from "../components/CategoryItem";


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
        <section className= 'services'>
            <h2>Services</h2>
            <ul>
                {categories.map((category)=> {
                    return <CategoryItem key={category.id} category={category} setSelectedCategory={setSelectedCategory}/>

                })}
            </ul>
            <menu>
                <h2>{selectedCategory.name}</h2>
                <ul>
                {selectedCategory.handymen?.map((handyman)=>{

                    return <li key={handyman.id}>
                        {handyman.firstname} - {handyman.lastname} <Link to={`/categories/${selectedCategory.id}/handymen/${handyman.id}/reservation`} ><button> Book now</button></Link>
                    </li>
                })}
                </ul>
            </menu>
        </section>
    );


}