import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component{
    constructor(){
        super()
        this.data =
           [
            { name : "Ujjwal", designation : "Trainee", city : "Meerut", state : "Uttar Pradesh"},
            { name : "Gaurav", designation : "Engineer", city : "Noida", state : "Uttar Pradesh"},
            { name : "Kamal", designation : "Senior Engineer", city : "Faridabad", state : "Uttar Pradesh"},
            { name : "Vimal", designation : "Police", city : "HafizGanj", state : "Uttar Pradesh"},
            { name : "Aviral", designation : "Student", city : "Muzaffarnagar", state : "Uttar Pradesh"}
        ]
    }
    render(){
        return(
            <>
            <h2>Parent Component</h2>
            <Child name="Ujjwal Upadhyay" salary={14250} city="Meerut" data={this.data}/>
            </>
        )
    }
}