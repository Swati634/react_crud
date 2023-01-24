import React, { useEffect, useState } from "react";

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        psw: "",
        cpsw: "",
    });
    const [records, setRecords] = useState([]);

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log("name-value", name, value);

        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...user, id: new Date().getTime().toString() };
        setRecords([...records, newRecord]);

        setUser({
            name: "",
            email: "",
            psw: "",
            cpsw: ""
        })
    };
    console.log(records);

    useEffect(() => {
        const url = 'https://crudcrud.com/api/b0f9c772e84d42d983d500899ceb4422/data'
        fetch(url).then(resp => resp.json())
            .then(resp => console.log(resp))
    }, [])


    return (
        <>
            <div className="container" id="main">
                <h2>Sign Up</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="t1"
                            name="name"
                            autoComplete="off"
                            value={user.name}
                            onChange={handleInputs}
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
                            value={user.email}
                            onChange={handleInputs}
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
                            value={user.psw}
                            onChange={handleInputs}
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
                            value={user.cpsw}
                            onChange={handleInputs}
                            placeholder="Enter Your Confirm  Password"
                        />
                    </div>
                    <br />
                    <button type="submit" id="save_btn" className="btn btn-default">
                        OK
                    </button>
                </form>
                <div>
                    {
                        records.map((curElem) => {
                            return (
                                <div className="showDataStyle">
                                    <p>{curElem.name}</p>
                                    <p>{curElem.email}</p>
                                    <p>{curElem.psw}</p>
                                    <p>{curElem.cpsw}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Signup;
