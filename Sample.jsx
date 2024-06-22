import React, { Component } from "react";


let name = "shaily upadhyay from sample class component"
let object2 = {
    name2 : "Shaily from sample class component",
    city : "Noida from sample class component",
    state  : "Uttar Pradesh from sample class component"
}

class Sample extends Component{
    render(){
        return(
            <>
            <h1>Class Component Example</h1>
            <h2>This is Sample Component</h2>
            </>
        )
    }
}

export default Sample
export{ name, object2}

