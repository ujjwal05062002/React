import React from "react";

export default function ChildF(props){
    return(
        <>
        <h2>Child Functional Component Component</h2>
        <h3>Name : {props.name}</h3>
        <table border="2px solid black" cellPadding="10px">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {
                props.data.map((item,index) => {
                    return <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.city}</td>
                        <td>{item.state}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
        </>
    )
}