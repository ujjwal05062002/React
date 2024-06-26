import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component{
    constructor(){
        super()
        this.data = [
            {id:1001, name:"Ujjwal", city:"Meerut", state:"Uttar Pradesh"},
            {id:1002, name:"Kamal", city:"Faridabad", state:"Haryana"},
            {id:1003, name:"Vimal", city:"Bariley", state:"Uttar Pradesh"},
            {id:1004, name:"Gaurav", city:"Noida", state:"Uttar Pradesh"},
            {id:1005, name:"Shaily", city:"Noida", state:"Uttar Pradesh"},
            {id:1006, name:"Aviral", city:"MuzaffarNagar", state:"Uttar Pradesh"}
        ]
    }
    render(){
        return(
            <>
            <h3>Parent Component</h3>
            <h4>Sending Data from Parent to Child</h4>

            <Child  data={this.data} />
            </>
        )
    }
}