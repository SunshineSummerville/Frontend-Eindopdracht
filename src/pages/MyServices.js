import React, {useEffect, useState, useContext} from 'react'
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import {isHandymanForCategory} from "../utils/logic";
import {PageTitle} from "../components/PageTitle";
import "./MyServices.css";


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
        <>
            <PageTitle title={"my services"}/>
        <form className={"services-form"}>
            {allCategories.map((category) => {
                const isHandymanForThisCategory = isHandymanForCategory(category, handymanId)

                return <label className={"service"} key={category.id}>
                    <input className={"service-checkbox"} type="checkbox" id="" name=""
                           onChange={(event) => updateService(category.id, event.target.checked ? "post" : "delete")}
                           checked={isHandymanForThisCategory}/>

                    {category.name} - {category.jobDescription}
                </label>

            })}


        </form>
        </>

    );


}