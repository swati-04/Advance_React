import React, { useState, useEffect } from 'react'

function UseEffectBasics() {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log('call useEffect');
        document.title=`New Message(${value})`;
    });
    console.log('render component');

    return (
        <>
            <h2>{value}</h2>
            <button className="btn" onClick={()=> setValue(value+1)}>click me</button>
        </>
    )
}

export default UseEffectBasics
