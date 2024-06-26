import React, { Component } from "react";

export default class Child extends Component {
    render() {
        return (
            <>
                <h3>Child Component</h3>
                <table border="2px Solid Black" cellPadding="10px" cellSpacing="0px">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {
                                this.props.data.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
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