import React, {useEffect, useState} from 'react'
import axios from "axios";
import CategoryItem from "../components/CategoryItem";
import HandymanItem from "../components/HandymanItem";
import "./Services.css";
import {PageTitle} from "../components/PageTitle";


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
        <section className='services'>
            <PageTitle title={"services"}/>
            <ul className={"category-list"}>
                {categories.map((category) => {
                    return <CategoryItem key={category.id} category={category}
                                         setSelectedCategory={setSelectedCategory}/>

                })}
            </ul>
            {selectedCategory.name && <menu className={"handyman-book-menu"}>
                <h2 className={"handyman-category"}>{selectedCategory.name}</h2>
                <ul className={"handyman-list"}>
                    {selectedCategory.handymen?.map((handyman) => {

                        return <HandymanItem key={handyman.id} handyman={handyman} selectedCategory={selectedCategory}/>
                    })}
                </ul>
            </menu>}
        </section>
    );


}