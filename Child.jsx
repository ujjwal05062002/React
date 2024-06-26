import React, { Component } from 'react';

export default class Child extends Component{
   sendData(){
    let data = [
        {id:1001, name:"Ujjwal", city:"Meerut", state:"Uttar Pradesh"},
        {id:1002, name:"Kamal", city:"Faridabad", state:"Haryana"},
        {id:1003, name:"Vimal", city:"Bariley", state:"Uttar Pradesh"},
        {id:1004, name:"Gaurav", city:"Noida", state:"Uttar Pradesh"},
        {id:1005, name:"Shaily", city:"Noida", state:"Uttar Pradesh"},
        {id:1006, name:"Aviral", city:"MuzaffarNagar", state:"Uttar Pradesh"}
    ]
    this.props.getData(data )
   }
    render(){
        return(
            <>
            <h2>Child Component</h2>
            <button onClick={()=>this.sendData()}>Send Data to Parent</button>
            </>
        )
    }
}