import React, { useState } from 'react'
import Employee from './Employee'



const Home = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")



    async function add() {
        let items = { name, age }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'name': 'Tina', 'age': 20 })
        };
        console.log(items, 'items')
        let result = await fetch("https://crudcrud.com/api/910089d9987849ea80b57848e430cc5c/data", requestOptions)
        result = await result.json(items)
        console.log('result', result);
        setName("")
        setAge("")

    }




    return (
        <>
            <div style={{ margin: "10rem" }}>

                {/* <button variant="primary" onClick={add}>
                    ADD
                </button> */}

                <button onClick=
                    {() => alert
                        ('hello')}>
                    ADD
                </button>

                <table id="table" border="1">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employee && Employee.length > 0
                                ?
                                Employee.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Age}
                                            </td>
                                            <td>
                                                {item.Action}
                                            </td>
                                            <td>
                                                <button onClick=
                                                    {() => alert
                                                        (item.id)}>
                                                    Edit
                                                </button> &nbsp;
                                                <button onClick=
                                                    {() => alert
                                                        (item.id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                                : "No Data Available"
                        }
                    </tbody>
                </table>

            </div>

        </>
    )
}

export default Home;
