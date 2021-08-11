import React, { useState } from 'react'

function UseStateObject() {
    const [person, setPerson] = useState({
        name: "Swati Singh",
        age: 22,
        message: "I like icecream",
    });
    const changeMessage = () => {
        setPerson({...person,message:"no message"})
    }
    return (
        <div>
            <>
                <h3>{person.name}</h3>
                <h3>{person.age}</h3>
                <h3>{person.message}</h3>
                <button className="btn" onClick={changeMessage}>Change my Message</button>
            </>

        </div>
    )
}

export default UseStateObject
