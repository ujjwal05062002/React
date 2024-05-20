import React, { Component } from 'react';

export default class Child extends Component {


    render() {
        return (
            <>
                <h3>Child Component</h3>
                <h3>Name : {this.props.name}</h3>
                <h3>Id : {this.props.id}</h3>
                <h3>Designation : {this.props.dsg}</h3>
            </>
        )
    }
}