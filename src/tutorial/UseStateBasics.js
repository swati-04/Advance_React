import React, { useState } from 'react'

function UseStateBasics() {
    const [day, setDay] = useState("Today is bad day")
    const handleClick = () => {
        setDay("Today is good day");
    }
    return (
        <div>
            <>
                <h1>{day}</h1>
                <button type="button" className="btn" onClick={handleClick}>
                change title
                </button>
               
                
            </>
        </div >
    )
}

export default UseStateBasics
