import React, {useEffect, useState, useContext} from 'react'
import axios from "axios";
import {AuthContext} from "../context/AuthContext";


export default function MyServices() {
    const [allCategories, setAllcategories] = useState([]);
    const {authState} = useContext(AuthContext);


    useEffect(() => {
        async function getAllCategories() {
            const result = await axios.get("http://localhost:8080/api/categories");
            setAllcategories(result.data);
        }

        getAllCategories();

    }, [])


    const handymanId = authState.user.id;

    async function updateService(categoryId, httpMethod) {
        const requestbody = {
            categoryId: categoryId
        };
        if (httpMethod === "post") {
            await axios.post(`http://localhost:8080/api/user/${handymanId}/categories`, requestbody, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authState.token}`,
                }
            });

        } else if (httpMethod === "delete") {
            await axios.delete(`http://localhost:8080/api/user/${handymanId}/categories`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authState.token}`,
                },
                data: requestbody

            });


        }

        const result = await axios.get("http://localhost:8080/api/categories");
        setAllcategories(result.data);


    };


    return (
        <form>
            {allCategories.map((category) => {
                const isHandymanForThisCategory = category.handymen.some((handyman) => {
                    return handyman.id === handymanId
                });

                return <label key={category.id}>
                    <input type="checkbox" id="" name=""
                           onChange={(event) => updateService(category.id, event.target.checked ? "post" : "delete")}
                           checked={isHandymanForThisCategory}/>

                    {category.name} - {category.jobDescription}
                </label>

            })}


        </form>

    );


}