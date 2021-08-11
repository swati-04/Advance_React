import React, {useState} from 'react'

function UseStateCounter() {
    const[value,setValue]=useState(0);
    return (
     <>
     <section style={{margin:'4rem 0'}}>
         <h2>A regular Counter</h2>
         <h1>{value}</h1>
         <button className="btn" onClick={()=> setValue(value-1)}>decrease</button>
         <button className="btn" onClick={()=> setValue(value+1)}>Increase</button>
         <button className="btn" onClick={()=> setValue(0)}>reset</button>

     </section>
     </>
    )
}

export default UseStateCounter
