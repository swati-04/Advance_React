import React,{useState,useContext} from 'react'
import {data} from "./data"
const PersonContext=React.createContext();

function ContextAPI() {
    const [people,setPeople]=useState(data);
    const removePerson=(id)=>{
        setPeople((people)=>{
            return people.filter((person)=>person.id !==id)
        })
    }
    return (
       <>
       <PersonContext.Provider value={{removePerson}}>
           <h3>Context</h3>
           <List people={people} />
           </PersonContext.Provider>
       </>
    )
}
const List=({people})=>{
    return <>{
        people.map((person)=>{
            return <SinglePerson key={person.id} {...person}
           />
        })
    }
    </>

}
const SinglePerson=({id,name})=>{
    const {removePerson}=useContext(PersonContext);

    return <div className="item">
        <h4>{name}</h4>
        <button onClick={()=>removePerson(id)}>remove</button>
    </div>
}

export default ContextAPI
