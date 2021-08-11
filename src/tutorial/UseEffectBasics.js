import React, { useState, useEffect } from 'react'

function UseEffectBasics() {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log('call useEffect');
        if(value>=1){//react hooks cant work conditionally
        document.title=`New Message(${value})`;
        }
    },[value]);

    console.log('render component');

    return (
        <>
            <h2>{value}</h2>
            <button className="btn" onClick={()=> setValue(value+1)}>click me</button>
        </>
    )
}

export default UseEffectBasics
