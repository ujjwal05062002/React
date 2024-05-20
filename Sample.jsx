import React, {Component} from "react";

let name =  "Ujjwal Upadhyay"

let arr1 = [10,20,30,40,50,60,70,80,90,100]

let emp1 = {
    id: 1001,
    name : "Ujjwal Upadhyay",
    designation : "Trainee",
    salary : 98500,
    city : "Meerut",
    state : "Uttar Pradesh"
}

function display1(){
    return(
        <h3>In Display Function of Sample Component</h3>
    )
}

class Sample extends Component{
    render(){
        return(
            <>
            <h1>Sample Class Component Example</h1>
            <h2>This is Sample Class Component Example</h2>
            </>
        )
    }
}

export default Sample   // default export 

export {name, arr1, emp1, display1}  // name export






















// import React, {Component} from 'react';

// class Sample extends Component{
//     render(){
//         return(
//             <>
//             <h1>Class Component Example</h1>
//             <h2>This is Sample Class Component</h2>
//             </>
//         )
//     }
// }

// export default Sample