import React, {useState} from "react";

export default function StateExampleF(){
    
        let [num, setNum] = useState(1)  

        function decrement() {
            if (num>1)
            setNum (num-1)
            else
            alert("Can't be Negitive")
        }

        function increment() {
            setNum (num+1)
        }


        return(
        <>
        <h1>Hooks and State in ReactJS</h1>

        <h2>num =  {num}</h2>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        </>
    )
}

