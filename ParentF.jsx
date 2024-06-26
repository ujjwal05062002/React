import React from 'react';
import ChildF from './ChildF';

export default function ParentF(){
    let data = [
        {id:1001, name:"Ujjwal", city:"Meerut", state:"Uttar Pradesh"},
        {id:1002, name:"Kamal", city:"Faridabad", state:"Haryana"},
        {id:1003, name:"Vimal", city:"Bariley", state:"Uttar Pradesh"},
        {id:1004, name:"Gaurav", city:"Noida", state:"Uttar Pradesh"},
        {id:1005, name:"Shaily", city:"Noida", state:"Uttar Pradesh"},
        {id:1006, name:"Aviral", city:"MuzaffarNagar", state:"Uttar Pradesh"}
    ]
    return(
        <>
        <h1>Functional Component to send Data from Parent to Child</h1>
        <h2>Parent Functional Component</h2>

        <hr />
        <ChildF data={data} name="Ujjwal Upadhyay" />
        </>
    )
}