import React, { Component } from "react"

export default class Child extends Component{
    render(){
        return(
            <>
            <h3>Name = {this.props.name}</h3>
            <h3>Salary = {this.props.salary}</h3>
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
                    this.props.data.map((item,index)=>{
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
}