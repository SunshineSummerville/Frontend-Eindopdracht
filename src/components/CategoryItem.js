import React from "react";

export default function CategoryItem ({category, setSelectedCategory}) {
    return <li  onClick={()=> setSelectedCategory(category)}>
        {category.name} - {category.jobDescription}
    </li>

}