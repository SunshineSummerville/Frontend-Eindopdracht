import React, {useEffect, useState} from 'react'
import axios from "axios";

export default function MyServices () {
    const [allCategories, setAllcategories] = useState([]);


    useEffect (()=> {
        // console.log("USEEFFECT WERKT?",useEffect)
        async  function getAllCategories () {
            const result = await axios.get ("http://localhost:8080/api/categories");
        console.log(result.data)
            setAllcategories(result.data)
        }
        getAllCategories()

    }, [])

    const handymanId = 2


    return (
        <div>
            {allCategories.map((category)=> {
                console.log("Category",category)
                const isHandymanForThisCategory = category.handymen.some((handyman)=> {
                    console.log("HANDYMAN",handyman.id, handymanId, handyman.id === handymanId)
                    return handyman.id === handymanId
                })
                console.log("CHECK",isHandymanForThisCategory)

                return <div key={category.id}>
                        <input type="checkbox" id="" name="" checked={isHandymanForThisCategory}/>

                    {category.name} - {category.jobDescription}
                </div>

            })}


        </div>

        );



}