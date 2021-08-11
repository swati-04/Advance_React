import React, { useState } from 'react'

function Forms() {
    const [firstName, setFirstName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [people, setPeople] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault(); //prevent default behavior of browser
        // console.log(firstName,email);
        if (firstName && email) {
            console.log('submit the value');
            const person={id:new Date().getTime().toString(),firstName,email};
            
            // const person = { firstName: firstName, email: email };
            console.log(person)
            setPeople((people) => {
                return [...people, person];
            })
            setFirstName('');
            setEmail('');
        }
        else {
            console.log('empty value');
        }
    }
    return (
        <>
            <article>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label htmlFor="firstName">Name :</label>
                        <input type="text" id="firstName" name='firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="email">Email :</label>
                        <input type="text" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                {people.map((person, index) => {
                    const { id, firstName, email } = person;
                    return (
                        <div className="item" key={id}>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                        </div>
                    );
                })}
            </article>
        </>
    )
}

export default Forms
