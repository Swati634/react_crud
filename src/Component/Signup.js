import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [psw, setPassword] = useState("")
    const [cpsw, setCpsw] = useState("")


    async function signup() {
        let items = { name, email, psw, cpsw }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'name': name, 'email': email, 'psw': psw })
        };
        console.log(items, 'items')
        let result = await fetch("https://crudcrud.com/api/76088923ae774733a686897fec04757b/data", requestOptions)
        result = await result.json(items)
        console.log('result', result);
        setName("")
        setEmail("")
        setPassword("")
        setCpsw("")
    }

    return (
        <>
            <div className="container" id="main">
                <h2>Sign Up</h2>
                {/* <form > */}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="t1"
                        name="name"
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Your Name"
                    />
                </div>
                <br />
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
                <div className="form-group">
                    <label htmlFor="pwd">Confirm Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="t4"
                        autoComplete="off"
                        name="cpsw"
                        value={cpsw}
                        onChange={(e) => setCpsw(e.target.value)}
                        placeholder="Enter Your Confirm  Password"
                    />
                </div>
                <br />
                <button onClick={signup} type="submit" id="save_btn" className="btn btn-primary"><Link to="/emp">
                    Sign Up</Link>
                </button>
                {/* </form> */}
            </div>
        </>
    );
};

export default Signup;
