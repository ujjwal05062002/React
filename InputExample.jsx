import React, { Component } from 'react'

export default class InputExample extends Component{
    constructor(){
        super()
        this.state = {
            name: ""
        }
        }

        getInputData(event){
            this.setState({name: event.target.value})
        }

        postData(){
            if (this.state.name === "")
                alert("Please Enter Name")
            else
                alert(`Hello : ${this.state.name}`)
        }
    render(){

        return(
            <>
           <div className="main">
            <div className="center">
                <h2>Class Component Input Example</h2>
                <h2>Name : {this.state.name}</h2>
                <input type="text" placeholder='Enter Your Name' name="name" onChange={(event)=>this.getInputData(event)}/>
                <button onClick={()=>this.postData()}>Submit</button>
            </div>
           </div>
            </>
        )
    }
    
}