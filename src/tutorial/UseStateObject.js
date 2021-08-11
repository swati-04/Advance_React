import React, { useState } from 'react'

function UseStateObject() {
    const [person, setPerson] = useState({
        name: "Swati Singh",
        age: 22,
        message: "I like icecream",
    });
    const[name,setName]=useState("Swati Singh")
    const[age,setAge]=useState(22
    )
    const[message,setMessage]=useState("hiii"
    )
    const changeMessage = () => {
        setPerson({...person,message:"no message"})
        setMessage("hello");
    }
    return (
        <div>
            <>
                <h3>{name}</h3>
                <h3>{age}</h3>
                <h3>{message}</h3>
                <button className="btn" onClick={changeMessage}>Change my Message</button>
            </>

        </div>
    )
}

export default UseStateObject
