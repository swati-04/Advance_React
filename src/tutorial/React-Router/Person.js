import React,{useState,useEffect} from 'react'
import {data} from "../data"
import {Link,useParams} from "react-router-dom";
function Person() {
    console.log(useParams());
    const [name,setName]=useState("Default State")
    const {id}=useParams();
    useEffect(()=>{
        const newPerson =data.find((person)=>person.id===parseInt(id));
        setName(newPerson.name)
    },[])
    return (
        <div>
            <h1>{name}</h1>
            <Link to="/people" className="btn">
                Back to People
            </Link>
        </div>
    )
}

export default Person
