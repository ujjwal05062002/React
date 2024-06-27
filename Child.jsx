import React from "react";

export default function Child(props){
    return(
        <>
        <h2>Name = {props.name}</h2>

        <table border="2px solid black" cellPadding="10px" cellSpacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((item,index)=>{
                        return <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.designation}</td>
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