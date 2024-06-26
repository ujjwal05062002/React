import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component{
    constructor(){
        super()
        this.state = {
            data :[data]
        }
    }
    getData(data){
        this.setState({data:data})
    }
    render(){
        return(
            <>
            <h3>Class Component Lifting State Up Example</h3>
            <h2>Parent Component</h2>
            {
                this.state.data.length ?
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((item, index)=>{
                               return <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.city}</td>
                                <td>{item.state}</td>
                               </tr> 
                            })
                        }
                    </tbody>
                </table>:
                ""
            }
            <hr />
            <Child />
            </>
        )
    }
}