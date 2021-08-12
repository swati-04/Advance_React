import React from 'react'
import axios from 'axios'

function LearnJSON() {
  const handleClick = (b) => {
    const promise = axios.post(" http://localhost:4000/users", {
      name: "Tony"
    }, {
      headers: {
        ['content-type']: 'application/json'
      }
    }
    )
  
  promise.then(response=>{
    console.log(response)
  })
  promise.catch(error=>{
    console.error(error);
  })
  let c=b;
  console.log(c);
  }
  return (
    <>
    <h2>Title</h2>
      <button type="button" className='btn' onClick={handleClick}>Send user</button>
      {/* <button type="button" className='btn' onClick={getUser}>get user</button> */}
    </>
  )
}

export default LearnJSON
