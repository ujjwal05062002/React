import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component{

    render(){
        return(
        <>
            <h1>Example to send Data from parent to child</h1>
            <h2>Parent Component</h2>
            <hr />
            <Child id={1001} name="Ujjwal" dsg="Trainee" Salary="99999" city="Meerut" state="Uttar Pradesh"/>
        </>
        )
    }
}


