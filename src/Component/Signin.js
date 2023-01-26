import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Signin = () => {
    const [email, setEmail] = useState("")
    const [psw, setPassword] = useState("")

    async function login() {
        let items = { email, psw }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'email': email, 'psw': psw })
        };
        console.log(items, 'items')
        let result = await fetch("https://crudcrud.com/api/76088923ae774733a686897fec04757b/data", requestOptions)
        result = await result.json(items)
        console.log('result', result);
        setEmail("")
        setPassword("")

    }
    return (
        <>
            <div className="container" id="main">
                <h1>Login Page</h1>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="t2"
                        name="email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email Address"
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="t3"
                        name="psw"
                        autoComplete="off"
                        value={psw}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Your Password"
                    />
                </div>
                <br />
                <button onClick={login} className='btn btn-primary'><Link to="/emp">Log In</Link></button>
            </div>
        </>
    )
}

export default Signin
