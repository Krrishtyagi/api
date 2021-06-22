import axios from "axios";
import React, { useState } from "react";



const Page = () => {

    const [Data, setData] = useState([])
    const [number, setNumber] = useState("");

    const getData = () => {
        axios.get(`https://reqres.in/api/users?page=${number}`)
            .then((res) => {
                // console.log(res.data.data);
                setData(res.data.data);
                
            })

    }


    return (

        <>

            <div className='button'>
                <input
                    type="text"
                    placeholder='Enter page number'
                    onChange={(e) => { setNumber(e.target.value) }} />
                <button onClick={getData}>Click</button>


<div className ="table">


                <table  align="center"border="2px" cellPadding="10px">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>firstname</th>
                            <th>lastname</th>
                            <th>lmage</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            Data.map((user, i) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.email}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td><img src = {user.avatar } alt='PIC'/></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                </div>
            </div>

        </>
    )




}
export default Page;