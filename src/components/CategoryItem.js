import React from "react";
import "./CategoryItem.css";
import {FcNext} from "react-icons/fc";

export default function CategoryItem ({category, setSelectedCategory}) {
    return <li className={"category"}  onClick={()=> setSelectedCategory(category)}>
        <img className={"category-image"} src={"https://source.unsplash.com/400x400/?"+category.name} alt={category.name}/>{category.name} - {category.jobDescription} <FcNext/>
    </li>

}