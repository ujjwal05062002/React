import React from 'react';

let name2 = "Ujjwal Upadhyay Imported from Sample Functional Component"

let arr1 = [10,20,30,40,50,60,70,80,90,100,"Imported from Sample Functional Component"]

let emp1 = {
    name: "Ujjwal Upadhyay Imported from Sample Functional Component",
    city: "Meerut Imported from Sample Functional Component",
    state: "Uttar Pradesh Imported from Sample Functional Component" 
}

function SampleF(){
    return(
        <>
        <h1>Functional Component Sample</h1>
        <h2>This is Functional Component Sample</h2>
        </>
    )
}

export default SampleF

export {name2, arr1, emp1}