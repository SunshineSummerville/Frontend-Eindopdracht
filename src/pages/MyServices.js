import React, {useEffect, useState, useContext} from 'react'
import axios from "axios";
import {AuthContext} from "../context/AuthContext";

export default function MyServices () {
    const [allCategories, setAllcategories] = useState([]);
    const {authState} = useContext (AuthContext);
    console.log("AUTH IN MY SERVICES",authState)



    useEffect (()=> {
        // console.log("USEEFFECT WERKT?",useEffect)
        async  function getAllCategories () {
            const result = await axios.get ("http://localhost:8080/api/categories");
        // console.log(result.data)
            setAllcategories(result.data)
        }
        getAllCategories()

    }, [])



    const handymanId = authState.user.id
    async function updateService (categoryId,httpMethod) {
        const requestbody = {
            categoryId: categoryId
        }
        console.log("Hello World", categoryId,handymanId, authState.token)
        if (httpMethod=== "post"){
            const response = await axios.post(`http://localhost:8080/api/user/${handymanId}/categories`, requestbody, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authState.token}`,
                }
            })

            console.log("RESPONSE",response)
        }else if(httpMethod=== "delete"){
            const response = await axios.delete(`http://localhost:8080/api/user/${handymanId}/categories`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authState.token}`,
                },
                data: requestbody

            })

            console.log("RESPONSE",response)

        }

        const result = await axios.get ("http://localhost:8080/api/categories");
        setAllcategories(result.data)



    }


    return (
        <div>
            {allCategories.map((category)=> {
                // console.log("Category",category)
                const isHandymanForThisCategory = category.handymen.some((handyman)=> {
                    // console.log("HANDYMAN",handyman.id, handymanId, handyman.id === handymanId)
                    return handyman.id === handymanId
                })
                // console.log("CHECK",isHandymanForThisCategory)

                return <div key={category.id}>
                        <input type="checkbox" id="" name="" onChange={(event)=>updateService(category.id,event.target.checked?"post":"delete")} checked={isHandymanForThisCategory}/>

                    {category.name} - {category.jobDescription}
                </div>

            })}


        </div>

        );



}