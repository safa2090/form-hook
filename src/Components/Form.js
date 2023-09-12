import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


        const newUser = { 
            firstName: firstName, 
            lastName: lastName,
            email: email, 
            password : password,
            confirmPassword: confirmPassword 
        }
        console.log("Welcome", newUser);
    

    return (
        <div>
        <form>
            <div>
                <label>First Name: </label>
                <input 
                    type="text" 
                    name="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div>
                <label>Last Name: </label>
                <input 
                    type="text" 
                    name="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div>
                <label>Email Address: </label>
                <input 
                    type="text" 
                    name="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password: </label>
                <input 
                    type="text" 
                    name="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input 
                    type="text" 
                    name="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
        </form>
        <h3>Your Form Data</h3>
        <p>
          <label>First Name: </label>{ firstName }
        </p>
        <p>
          <label>Last Name: </label>{ lastName }
        </p>
        <p>
          <label>Email: </label>{ email }
        </p>
        <p>
          <label>Password: </label>{ password }
        </p>
        <p>
          <label>Confirm Password: </label>{ confirmPassword }
        </p>
        </div>
)}

export default Form;
