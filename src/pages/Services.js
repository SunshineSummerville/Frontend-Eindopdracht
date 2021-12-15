import React, {useEffect, useState} from 'react'
import axios from "axios";
import CategoryItem from "../components/CategoryItem";
import HandymanItem from "../components/HandymanItem";


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

                    return <HandymanItem key={handyman.id} handyman={handyman} selectedCategory={selectedCategory}/>
                })}
                </ul>
            </menu>
        </section>
    );


}